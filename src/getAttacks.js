export default ({ special }) => {
  const attacks = special.map((attack) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = attack;
    return ({
      id,
      name,
      description,
      icon,
    });
  });
  attacks.sort(({ id: id1 }, { id: id2 }) => id1 - id2);
  return attacks;
};
