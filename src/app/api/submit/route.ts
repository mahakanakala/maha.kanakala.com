import { google } from 'googleapis';
import { NextResponse } from "next/server";

type FormSubmission = {
  rsvpResponse: string | null;
  plusOne: boolean;
  plusOneName: string;
  guestName: string;
  timestamp: string;
};

export async function POST(req: Request) {
  const timestamp = new Date();
  const timestampEST = timestamp.toLocaleString("en-US", {timeZone: "America/New_York"});
  const { rsvpResponse, plusOne, plusOneName, guestName } = await req.json() as FormSubmission;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Guests!H1:L1';

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[guestName, rsvpResponse || '', plusOne ? 'TRUE' : 'FALSE', plusOneName, timestampEST]],
      },
    });

    console.log('req.body:', req.body);
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ "message": error });
  }
}