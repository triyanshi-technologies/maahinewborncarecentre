"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const serviceOptions = [
  "OPD consultation",
  "Vaccination",
  "High Risk OPD follow-up",
  "Breastfeeding counselling",
  "Growth and nutrition counselling",
  "Other",
];

type FieldErrors = { name: boolean; phone: boolean };
type Submission = { name: string; phone: string; service: string };

const fieldClass =
  "min-h-13.5 w-full rounded-sm border-[1.5px] border-line bg-ground px-4.5 text-base leading-normal text-ink focus:border-navy focus:bg-white focus:outline-none aria-invalid:border-error";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export function AppointmentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({ name: false, phone: false });
  const [submission, setSubmission] = useState<Submission | null>(null);

  // Move focus to the confirmation so screen-reader users hear the result.
  useEffect(() => {
    if (submission) successRef.current?.focus();
  }, [submission]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");

    const nextErrors = {
      name: name.length <= 1,
      phone: phone.replace(/\D/g, "").length < 10,
    };
    setErrors(nextErrors);

    if (nextErrors.name) return nameRef.current?.focus();
    if (nextErrors.phone) return phoneRef.current?.focus();

    // TODO: send the request to the clinic (API route, email service or CRM) before confirming.
    setSubmission({ name, phone, service });
  }

  function handleReset() {
    formRef.current?.reset();
    setSubmission(null);
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  if (submission) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="flex flex-col items-start gap-3 rounded-3xl bg-sky p-9"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-navy text-white">
          <Icon name="check" size={28} />
        </span>
        <h3 className="text-4xl text-navy">Request received</h3>
        <p>
          Thank you, {submission.name}. Your request for {submission.service} has been received. Our
          team will call you on {submission.phone} shortly.
        </p>
        <Button variant="outline" onClick={handleReset}>
          Send another request
        </Button>
      </div>
    );
  }

  const hasErrors = errors.name || errors.phone;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4.5">
      <div className="grid gap-4.5 sm:grid-cols-2">
        <Field id="c-name" label="Parent's name *">
          <input
            ref={nameRef}
            id="c-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            aria-invalid={errors.name || undefined}
            className={fieldClass}
          />
        </Field>
        <Field id="c-phone" label="Mobile number *">
          <input
            ref={phoneRef}
            id="c-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            required
            aria-invalid={errors.phone || undefined}
            className={fieldClass}
          />
        </Field>
      </div>
      <div className="grid gap-4.5 sm:grid-cols-2">
        <Field id="c-service" label="Service">
          <select id="c-service" name="service" className={fieldClass}>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id="c-age" label="Baby's / child's age">
          <input
            id="c-age"
            name="age"
            type="text"
            placeholder="e.g. 3 weeks"
            className={fieldClass}
          />
        </Field>
      </div>
      <Field id="c-msg" label="Message">
        <textarea
          id="c-msg"
          name="message"
          rows={4}
          placeholder="Tell us briefly how we can help"
          className={cn(fieldClass, "resize-y py-4")}
        />
      </Field>
      {hasErrors && (
        <p role="alert" className="text-sm font-semibold text-error">
          Enter your name and a 10-digit mobile number.
        </p>
      )}
      <Button type="submit" className="self-start border-0">
        Request appointment
        <Icon name="arrow-right" size={18} />
      </Button>
    </form>
  );
}
