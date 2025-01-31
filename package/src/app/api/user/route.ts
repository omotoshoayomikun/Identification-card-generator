import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import dbConfig from '../../lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { User } from './models/User';
import { PrintingStatus } from '@/app/general/enums';

export async function GET(req: NextRequest) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users WHERE printed = ?', [PrintingStatus.Pending.toString()]);
    await connection.end();

    return NextResponse.json({
      message: 'Data retrieved successfully',
      data: rows as User[]
    }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({
      message: 'Internal server error'
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const request = await req.json() as User;
  const status = PrintingStatus.Pending.toString();

  const {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    branch,
    plateNumber,
    emergencyFullName,
    emergencyPhone,
    emergencyAddress,
    unit,
    unionName,
    ninBvn,
    address,
    image
  } = request;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const query = `
      INSERT INTO users (
        firstName, lastName, middleName, dateOfBirth, branch, plateNumber,
        emergencyFullName, emergencyPhone, emergencyAddress, unit, unionName,
        ninBvn, address, image, printed, abksthNo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const abkNo = generateUniqueNumber();

    const values = [
      firstName, lastName, middleName, dateOfBirth, branch, plateNumber,
      emergencyFullName, emergencyPhone, emergencyAddress, unit, unionName,
      ninBvn, address, image, status, abkNo
    ];

    await connection.execute(query, values);
    await connection.end();

    return NextResponse.json({
      message: 'Form submitted successfully',
      data: request
    }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({
      message: 'Internal server error'
    }, { status: 500 });
  }

  function generateUniqueNumber(): string {
    const year = new Date().getFullYear();
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    return `abk-${year}-${timestamp}`;
  }
}