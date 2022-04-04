/* eslint-disable no-use-before-define */
import Text from '../text';
import Container from '../container';
import { FlashCardListProps } from '../../types/components';
import { capitalizeFirstLetter } from '../../helpers';

const FlashCardList = ({ flashCards }: FlashCardListProps) => (
  <Container fullWidth marginTop='20px'>
    {flashCards.map((flashCard) => (
      <Container fullWidth>
        <Container marginTop="20px" fullWidth justifyContent='space-between'>
          <Text light text={capitalizeFirstLetter(flashCard.name)} size="md" />
          <Text light text={`Bin: ${flashCard.bin}`} size="sm" />
          <Text light text={`Lifetime correct guesses: ${flashCard.correctGuesses}`} size="sm" />
          <Text light text={`Lifetime incorrect guesses: ${flashCard.incorrectGuesses}`} size="sm" />
          <Text light text={`Description: ${flashCard.description ?? 'None'}`} size="sm" />
          <Text light text={`Next shown time: ${new Date(flashCard.nextAvailableTime)}`} size="sm" />
        </Container>
      </Container>
    ))}
  </Container>
);

export default FlashCardList;
