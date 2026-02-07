import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if API key exists
    const apiKey = import.meta.env.RESEND_API_KEY;
    console.log('API Key exists:', !!apiKey);
    console.log('API Key prefix:', apiKey?.substring(0, 10) + '...');
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service not configured' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);
    
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const project = formData.get('project')?.toString() || 'Not specified';
    const message = formData.get('message')?.toString() || '';

    console.log('Form data received:', { name, email, project, messageLength: message.length });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Please fill in all required fields' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Attempting to send email via Resend...');

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "L'Atelier Website <onboarding@resend.dev>",
      to: ['contact@latelier-desserts.com'], // TODO: Update with actual email when provided
      replyTo: email,
      subject: `New Order Inquiry: ${project} - ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #d4aa8b; font-size: 24px; margin-bottom: 30px;">New Order Inquiry</h1>
          
          <div style="background-color: #ebe9d6; padding: 30px; border-radius: 4px;">
            <p style="margin: 0 0 20px; color: #492819;">
              <strong style="color: #d4aa8b;">Name:</strong><br/>
              ${name}
            </p>
            
            <p style="margin: 0 0 20px; color: #492819;">
              <strong style="color: #d4aa8b;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #d4aa8b;">${email}</a>
            </p>
            
            <p style="margin: 0 0 20px; color: #492819;">
              <strong style="color: #d4aa8b;">Order Type:</strong><br/>
              ${project}
            </p>
            
            <p style="margin: 0; color: #492819;">
              <strong style="color: #d4aa8b;">Message:</strong><br/>
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #a8a799;">
            This message was sent from L'Atelier Timeless Desserts website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2));
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Resend error: ${error.message || 'Unknown error'}`,
          details: error
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully:', data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('Contact form exception:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: `Exception: ${errorMessage}` 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
