import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type FormSubmission = {
  rsvpResponse: string | null;
  plusOne: boolean;
  plusOneName: string;
  guestName: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { rsvpResponse, plusOne, plusOneName, guestName } = req.body as FormSubmission;

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
    const range = 'B1:E1'; 

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[guestName, rsvpResponse || '', plusOne ? 'Yes' : 'No', plusOneName]],
      },
    });

    console.log('req.body:', req.body);

    return res.status(201).json({ data: response.data });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}