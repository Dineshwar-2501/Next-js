import { NextResponse } from "next/server"
export async function GET() {
  return NextResponse.json({ users: [{
    name:"Harish B",
    age:21,
    Role:"Intern",
  }] })
}

export async function POST() {
  return Response.json({message: 'POST success'})
}
