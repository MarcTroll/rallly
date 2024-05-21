import { defaultEmailContext, EmailContext } from "./_components/email-context";
import { EmailLayout } from "./_components/email-layout";
import { Button, Card, Link, Text } from "./_components/styled-components";

export interface NewPollEmailProps {
  title: string;
  name: string;
  adminLink: string;
  participantLink: string;
  ctx: EmailContext;
}

const ShareLink = ({
  title,
  participantLink,
  name,
  children,
}: React.PropsWithChildren<{
  name: string;
  title: string;
  participantLink: string;
}>) => {
  return (
    <Link
      href={`mailto:?subject=${encodeURIComponent(
        `Terminplanung für ${title}`,
      )}&body=${encodeURIComponent(
        `Hallo zusammen,\nich versuche einen Termin für ${title} zu finden.\nÜber folgenden Link könnt ihr für einen Termin abstimmen:\n${participantLink}\nDanke.\n${name}`,
      )}`}
    >
      {children}
    </Link>
  );
};

export const NewPollEmail = ({
  title = "Untitled Poll",
  name = "John",
  adminLink = "https://rallly.co/admin/abcdefg123",
  participantLink = "https://rallly.co/invite/wxyz9876",
  ctx = defaultEmailContext,
}: NewPollEmailProps) => {
  const { baseUrl, domain } = ctx;
  return (
    <EmailLayout
      ctx={ctx}
      footNote={
        <>
          Du erhältst diese E-Mail als Information, dass mit deiner
          E-Mail-Adresse eine Umfrage auf <Link href={baseUrl}>{domain}</Link>
          erstellt wurde.
          Wenn du das nicht warst, kannst du diese E-Mail ignorieren.
        </>
      }
      recipientName={name}
      preview="Teile deinen Link um Ergebnisse zu sammeln."
    >
      <Text>
        Deine Umfrage wurde erfolgreich erstellt. Übersicht über deine Umfrage:
      </Text>
      <Card>
        <Text>
          <strong>Titel:</strong> {title}
          <br />
          <strong>Einladungslink:</strong>{" "}
          <Link href={participantLink}>{participantLink}</Link>
        </Text>
        <Text>
          <ShareLink
            title={title}
            name={name}
            participantLink={participantLink}
          >
            Via Email teilen
          </ShareLink>
        </Text>
      </Card>
      <Text>
        To invite participants to your poll, simply share the{" "}
        <strong>Invite Link</strong> above with them. They&apos;ll be able to
        vote on their preferred meeting times and dates.
      </Text>
      <Text>
        If you need to make any changes to your poll, or if you want to see the
        results so far, just click on the button below:
      </Text>
      <Text>
        <Button href={adminLink}>Manage Poll &rarr;</Button>
      </Text>
    </EmailLayout>
  );
};

export default NewPollEmail;
