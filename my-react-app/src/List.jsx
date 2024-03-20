

function List(){

    const fruits=[{id:1,name:"thing",calories:67},
    {id:2,name:"apple",calories:95},
    {id:3,name:"two",calories:7}];

    // fruits.sort((a,b)=>b.name.localeCompare(a.name));reverse Alphabetical order
    // fruits.sort((a,b)=>b.calories-a.calories); NUMERIC

    const lowCalFruits= fruits.filter(fruit => fruit.calories<100)

    // const listItems= lowCalFruits.map(lowCalFruits=><li key={lowCalFruits.id}>
    //     {lowCalFruits.name}:&nbsp;
    //     <b>{lowCalFruits.calories}</b></li>);

    const listItems= fruits.map(fruit=><li key={fruit.id}>
        {fruit.name}:&nbsp;
        <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}

export default List