import './style.css';

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = async() => {

  // async, await
  const res1 = await fetch("https://fakestoreapi.com/products/1");
  const data1 = await res1.json();
  console.log(data1);

  const res2 = await fetch("https://fakestoreapi.com/products/2");
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch("https://fakestoreapi.com/products/3");
  const data3 = await res3.json();
  console.log(data3);

  // console.log("u click");

  // async vs await

  //  fetch("http://localhost:5000/tasks")
  // .then((data) => data.text()) 
  //   .then((result) => {
  //     console.log(JSON.parse(result)) ;
  //   })

  // let x = 4;
  // const p = new Promise ((resolve,reject) => {
  //   setTimeout(() => {
  //     resolve(5)
  //   },200) 
  // });

  // p.then(function (data){
  //   x = data;
  //   console.log(x === 5 ? "good" : "bad");
  // });

  //   const p = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const val = Math.floor(Math.random() * 10)
  //       console.log(val);

  //       if (val > 5) {
  //         resolve(val);
  //       } else {
  //         reject(val);
  //       }
  //     }, 1000);
  //   }).then((x) => {
  //     console.log("success",x) 
  //   },
  //   (y) => {
  //     console.log("fail",y) 
  //   }
  // );

  // error solve
  // p.catch((e) => {
  //   console.log(e.message);
  // });

  // p.finally(() => {
  //   console.log("final") 
  // })

  // let x = 0;
  // setTimeout(() => {
  //   x = 5;
  // },1000);
  // console.log( x === 5 ? "good" : "bad");


  // fetch("http://localhost:5000/tasks")
  // .then((res) => res.text())
  // .then((task) => console.log(JSON.parse(task)))

  // sync vs async

  // sync
  // console.log("a");
  // console.log("b");
  // console.log("c");

  // async
  // fetch("http://localhost:5000/tasks/1")
  //   .then((res) => res.json())
  //   .then((data) => console.log((data)));

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));

  //   fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));

  //   fetch("https://fakestoreapi.com/products/2")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));

  //   fetch("https://fakestoreapi.com/products/3")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));

  // setTimeout(() => {
  //   console.log(5)
  // },1000);

  // const bar = () => console.log("first");
  // const foo =  () => setTimeout(() => {console.log("second")},1000);
  // const baz =  () => console.log("third");
  // bar();
  // foo();
  // baz();


  // long time sync process
  // console.log("start");
  // let x = 0;
  // for(let i = 0; i <= 99999; i++){
  //   x += i;
  // };
  // console.log(x);

  //   fetch("https://fakestoreapi.com/products/3")
  // .then((res) => res.json())
  // .then((products) => console.log(products));
  // console.log("end");
}


fetchBtn.addEventListener("click", handleFetchBtn);                                                                                                                   