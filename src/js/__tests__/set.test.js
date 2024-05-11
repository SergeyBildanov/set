import Team from '../set';

test("add existing Character", ()=>{
  let team = new Team();
  team.add({name:"Ваня", role:"Воин"});
  let expected = new Error('Такой персонаж уже существует');
  expect(() => team.add({name:"Ваня", role:"Воин"})).toThrow(expected);
})

test("addAll with existing Character", ()=>{
  let team1 = new Team();
  let team2 = new Team();
  
  team1.addAll({name:"Ваня", role:"Воин"} , {name:"Игорь", role:"Князь"});
  team2.addAll({name:"Ваня", role:"Воин"}, {name:"Ваня", role:"Воин"} , {name:"Игорь", role:"Князь"} );
  expect(team1.toArray()).toEqual(team2.toArray());
})

test("add new Character", ()=>{
  let team1 = new Team();
  let team2 = new Team();
  
  team1.addAll({name:"Ваня", role:"Воин"} , {name:"Игорь", role:"Князь"});
  team2.addAll({name:"Ваня", role:"Воин"});
  team2.add({name:"Игорь", role:"Князь"});
  expect(team1.toArray()).toEqual(team2.toArray());
})
