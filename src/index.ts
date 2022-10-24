import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });


////

function write(data:number | string| boolean | undefined | null = null ):any{
  console.log(data);
  return data;
}

function name(data: string):any{
  console.log('name = ' + data);
  return data;
}

function age(data: number): any{
  console.log('age = ' + data)
  return data;
}

function boolean_tf(data: boolean): any{
  console.log('boolean = ' + data)
  return data;
}

enum myenum {
  self
}

function enum_string(data:string):any{
  myenum
  return data;
}

function enum_number(data:number):any{
  myenum
  return data;
}

function enum_boolean(data:boolean):any{
  myenum
  return data;
}

function enum_all(data:number | string| boolean | undefined | null = null ):any{
  myenum
  return data;
}

function record_dataBase(data: number | string| boolean | undefined | null = null ):any{
  console.log(data + " recorded as")
}

function write_dataBase(data: number | string| boolean | undefined | null = null ):any{
  console.log(data);
  return data;
}