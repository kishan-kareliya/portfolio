"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ContactForm({ isDark, headingColor, linkColor }: any) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/kareliyakishan007@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            _subject: "My Portfolio Contact Submission",
            message: `A new user is interested in working with you. Their email is: ${email}`,
          }),
        }
      );

      const data = await res.json();

      if (data.success === "true") {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h3 className={`text-lg font-bold ${headingColor}`}>
        Have an idea? I can help you build it
      </h3>

      <p className="text-sm leading-relaxed">
        Send me an email at{" "}
        <a
          href="mailto:kareliyakishan007@gmail.com"
          className={`${linkColor} hover:underline`}
        >
          kareliyakishan007@gmail.com
        </a>
        , drop your email address below and I will get back to you!
      </p>

      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-3 py-2 text-sm border rounded ${
            isDark
              ? "bg-[#262626] border-[#374151] text-[#d1d5db] placeholder-[#9ca3af] focus:border-[#f9fafb]"
              : "bg-[#f7f5f3] border-[#d1d5db] text-[#374151] placeholder-[#6b7280] focus:border-[#111827]"
          } focus:outline-none focus:ring-0`}
        />

        <Button
          type="submit"
          variant="outline"
          size="sm"
          className={`px-4 py-2 text-sm border ${
            isDark
              ? "border-[#374151] text-black hover:bg-[#d0d0d0]"
              : "border-[#d1d5db] text-[#374151] hover:bg-[#f0ede8]"
          }`}
        >
          {status === "sending" ? (
            <Loader2 className="animate-spin h-5 w-5" />
          ) : (
            "Send"
          )}
        </Button>
      </div>

      {/* Show response message */}
      {status === "success" && (
        <p className="text-green-600 text-sm">
          Thanks! I’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
