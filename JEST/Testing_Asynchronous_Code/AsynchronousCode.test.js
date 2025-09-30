//promises

function fetchData(){
    return Promise.resolve('peanut butter');
}

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

//Async/await
test('the data is peanut butter',async()=>{
    const data= await fetchData();
    expect(data).toBe('peanut butter');
}); 

test('the fetch fails with an error',async()=>{
    expect.assertions(1);
    try{
        await fetchData();
    }catch(error){
        expect(error).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error' , async()=>{
    await expect(fetchData()).rejects.toMatch('error');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});

//callbacks
/*
function fetchData(callback){
    setTimeout(()=>{
        callback(null,'peanut butter');
    },100);
}

test('the data is peanut butter',done=>{
    function callback(error,data){
        if (error){
            document(error);
            return;
        }
        try{
            expect(data).toBe('peanut butter');
            done();

        }catch(error){
            done(error);
        }
        
    }
    fetchData(callback);
})
*/
