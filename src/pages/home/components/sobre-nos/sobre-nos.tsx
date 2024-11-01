import { CardContent } from "./card-content";
import { CardType } from "./cardType";
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";

export const SobreNos = () => {
  const cards: CardType[] = CardContent();

  return (
    <Wrapper>
      <Title>Sobre nós</Title>
      <SubTitle>console.log("Hello world!")</SubTitle>
      {cards.map((content) => (
        <Card key={content.id.toString()}>
          <Message>{content.message}</Message>
        </Card>
      ))}
    </Wrapper>
  );
};
