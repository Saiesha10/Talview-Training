//Truthiness
//toBe() exact equality
test('2+2 is 4',()=>{
    expect(2+2).toBe(4); 
});

//toEqual checks value of an object,//not is the opposite
test('object assignment',()=>{
    const data={one:1};
    data['two']=2;
    expect(data).not.toEqual({one:1,five:2});
});

test('null',()=>{
    const n=null;
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//Numbers
test('two plus two',()=>{
    const value=2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4)
})

test('adding floating point numbers ',()=>{
    const value=0.1+0.2;
    expect(value).toBeCloseTo(0.3);
})

//strings
test('there is no I in team',()=>{
    expect('team').not.toMatch(/I/);

});
test('but there is "elloo" in hellooo',()=>{
    expect('hellooo').toMatch(/elloo/);
});

//Arrays and iterables
const shoppingList=[
    'milk','eggs','biscuits','cereals',
];
test('shopping list contains milk',()=>{
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

//Exceptions:
function compileAndroidCode(){
    throw new Error('you are using wrong JDK!');
}
test('compiling android goes as expected',()=>{
    expect(()=>compileAndroidCode()).toThrow();
    expect(()=>compileAndroidCode()).toThrow(Error);

    expect(()=>compileAndroidCode()).toThrow('you are using wrong JDK');
    expect(()=>compileAndroidCode()).toThrow(/JDK/);

    expect(()=>compileAndroidCode()).toThrow(/^you are using wrong JDK!$/);
});