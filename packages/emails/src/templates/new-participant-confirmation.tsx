import { defaultEmailContext, EmailContext } from "./_components/email-context";
import { EmailLayout } from "./_components/email-layout";
import { Button, Domain, Section, Text } from "./_components/styled-components";

interface NewParticipantConfirmationEmailProps {
  name: string;
  title: string;
  editSubmissionUrl: string;
  ctx: EmailContext;
}
export const NewParticipantConfirmationEmail = ({
  title = "Untitled Poll",
  name = "John",
  editSubmissionUrl = "https://rallly.co",
  ctx = defaultEmailContext,
}: NewParticipantConfirmationEmailProps) => {
  const { domain } = ctx;
  return (
    <EmailLayout
      ctx={ctx}
      footNote={
        <>
          Du erhältst diese E-Mail als Bestätitgung darüber, dass du bei der
          Terminumfrage <strong>{title}</strong> auf{" "}<Domain ctx={ctx} />
          {" "}eine Rückmeldung gegeben hast.
          Wenn du das nicht warst, kannst du diese E-Mail ignorieren.
        </>
      }
      recipientName={name}
      preview="Um deine Antwort zu bearbeiten nutze den untentehenden Link"
    >
      <Text>
        Deine Rückmeldung für <strong>{title}</strong> wurde gespeichert.
      </Text>
      <Text>
        Solange die Umfrage noch nicht abgelaufen ist, kannst du deine
        Rückmeldung noch bearbeiten.
      </Text>
      <Section>
        <Button id="editSubmissionUrl" href={editSubmissionUrl}>
          Rückmeldung auf {domain} einsehen/bearbeiten
        </Button>
      </Section>
    </EmailLayout>
  );
};

export default NewParticipantConfirmationEmail;
