import { headers, cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { eventName, eventId, eventSourceUrl, customData, testEventCode } = await req.json();
    
    const reqHeaders = await headers();
    const reqCookies = await cookies();
    
    // Get IP address
    const forwardedFor = reqHeaders.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    
    // Get User Agent
    const userAgent = reqHeaders.get('user-agent') || '';
    
    // Get fbp and fbc cookies
    const fbp = reqCookies.get('_fbp')?.value || '';
    const fbc = reqCookies.get('_fbc')?.value || '';
    
    // Construct the payload for Meta Conversions API
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2313907359416805';
    const accessToken = process.env.META_ACCESS_TOKEN || 'EAA55bhf5yeQBR7qocqxRJ4LdqM2rKZAGCfWNgu7C3wxgZAZBZAidpPxIcFiHmOqqWewf0Vc4drZAVE91lY4E6aCAgYwZC9ZB1NiiYWbRZAohT7eaQFyZCnpnWZBVHuCaIHrzlYXmtVENyGVFCUn1fPozusKuYvIfIzqLal9PUga8noGDRoYvM4lVbIAwfPzhwm8wZDZD';
    
    const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;
    
    const eventTime = Math.floor(Date.now() / 1000);
    
    // Build user_data payload
    const user_data: any = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    };
    
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;
    
    // If there is a fbclid in the eventSourceUrl, we can construct or send fbc
    if (!fbc && eventSourceUrl) {
      try {
        const urlObj = new URL(eventSourceUrl);
        const fbclid = urlObj.searchParams.get('fbclid');
        if (fbclid) {
          // Construct standard fbc format: fb.1.{event_time}.{fbclid}
          user_data.fbc = `fb.1.${eventTime}.${fbclid}`;
        }
      } catch (e) {
        // Ignore URL parsing errors
      }
    }
    
    const payload: any = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: 'website',
          user_data,
          custom_data: customData || {},
        }
      ]
    };

    // Add test event code if provided to debug in Meta Event Manager
    const testCode = testEventCode || process.env.META_TEST_EVENT_CODE;
    if (testCode) {
      payload.test_event_code = testCode;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const resData = await response.json();
    
    if (!response.ok) {
      console.error('Meta CAPI Error Response:', resData);
      return NextResponse.json({ success: false, error: resData }, { status: response.status });
    }
    
    return NextResponse.json({ success: true, data: resData });
  } catch (error: any) {
    console.error('Meta CAPI Route Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
