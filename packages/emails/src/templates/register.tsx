import { defaultEmailContext, EmailContext } from "./_components/email-context";
import { EmailLayout } from "./_components/email-layout";
import {
  Domain,
  Heading,
  Text,
  trackingWide,
} from "./_components/styled-components";

interface RegisterEmailProps {
  name: string;
  code: string;
  ctx: EmailContext;
}

export const RegisterEmail = ({
  name = "John",
  code = "123456",
  ctx = defaultEmailContext,
}: RegisterEmailProps) => {
  return (
    <EmailLayout
      ctx={ctx}
      footNote={
        <>
          Du erhältst diese E-Mail, weil jemand versucht, mit dieser
          E-Mail-Adresse einen Account auf <Domain ctx={ctx} /> zu erstellen.
          Wenn du das nicht warst, kannst du diese E-Mail ignorieren.
        </>
      }
      recipientName={name}
      preview={`Dein 6-stelliger Code ist: ${code}`}
    >
      <Text>
        Bitte nutze den folgenden 6-stelligen Code zur Verifizierung deiner
        E-Mail-Adresse:
      </Text>
      <Heading as="h1" style={{ ...trackingWide }} id="code">
        {code}
      </Heading>
      <Text>Dieser Code ist für 15 Minuten gültig.</Text>
    </EmailLayout>
  );
};

export default RegisterEmail;
