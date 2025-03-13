'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}