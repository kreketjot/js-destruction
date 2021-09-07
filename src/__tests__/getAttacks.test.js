import getAttacks from '../getAttacks';

const character = {
  shth: '...',
  special: [
    {
      id: 2,
      name: 'some name',
      description: 'some description',
      icon: 'some icon',
    },
    {
      id: 38,
      name: 'another name',
      icon: 'another icon',
    },
  ],
};

test('character default attack description', () => expect(getAttacks(character)[1].description).toBe('Описание недоступно'));
test('character own attack description', () => expect(getAttacks(character)[0].description).toBe('some description'));
