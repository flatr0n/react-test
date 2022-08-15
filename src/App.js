import React, {useState} from "react";
import Counter from './Counter.js';
import useWindowSize from './hooks/useWindowSize';

const productFromServer = [
	{
		id: 100,
		title: 'Ipnone 200',
		price: 12000,
		rest: 10,
		cnt: 1
	},
	{
		id: 101,
		title: 'Samsung AAZ8',
		price: 22000,
		rest: 5,
		cnt: 1
	},
	{
		id: 103,
		title: 'Nokia 3310',
		price: 5000,
		rest: 2,
		cnt: 1
	},
	{
		id: 105,
		title: 'Huawei ZZ',
		price: 15000,
		rest: 8,
		cnt: 1
	}
];

function App(){
	let [products, setProducts] = useState(productFromServer);
	let windowSize = useWindowSize();
	let changeCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id !== id ? pr : {...pr, cnt}));
	}
  	let deleteProd = (id) => {
     	setProducts(products.filter(pr => pr.id !== id));
	};
	let calcTotal = () => {
		let total = 0;
		products.forEach( pr => {
			total += pr.price * pr.cnt;
		})
		return total;
	};

	let productsRows = products.map(pr => (
		<tr key={pr.id}>
			<td>{ pr.title }</td>
			<td>{ pr.price }</td>
			<td>
				<Counter max={pr.rest} current={pr.cnt} onChange={val => changeCnt(pr.id, val)} />
			</td>
			<td>{ pr.price * pr.cnt }</td>
      		<td><button onClick={() => deleteProd(pr.id)}>Delete</button></td>
		</tr>
	));

	return <div>
		<header>
			header
		</header>
		<main>
			<h1>Cart</h1>
			<hr/>
			<table>
				<thead>
					<tr>
						<td>Title</td>
						<td>Price</td>
						<td>Count</td>
						<td>Total</td>
					</tr>
				</thead>
				<tbody>
					{ productsRows }
				</tbody>
			</table>
			<div>
				<strong>{ windowSize.width > 700 && windowSize.height > 500 && calcTotal() }</strong>
			</div>
		</main>
		<footer>
			footer
		</footer>
	</div>
}

export default App;