import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Projet_component/Navbar';
import Cart from './view/Cart';
import Home from './view/Home';
import Form from './view/Form';
import Thank from './view/Thank';
import './App.css';

const App = () => {
  const Fruits=[
    {
        "_id": "66688d375db7ccb7e0515ea0",
        "ref": "F001",
        "category": "Fruits",
        "name": "pomme",
        "price": 0.3,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/185262648/fr/photo/pomme-rouge-avec-feuilles-isolé-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=TtNNNtMUUeTKY4ug3KdwnxHxRQMRyIjgZpOChBWycTU=",
        "__v": 0
    },
    {
        "_id": "66688e895db7ccb7e0515ea3",
        "ref": "F002",
        "category": "Fruits",
        "name": "Banane",
        "price": 1,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/959104928/fr/photo/banane.jpg?s=612x612&w=0&k=20&c=w8Xcn6zGHu3BzEx4t5zSafjgdZ3j2VPoJME53fYGd-k=",
        "__v": 0
    },
    {
        "_id": "66688faf5db7ccb7e0515ea6",
        "ref": "F003",
        "category": "Fruits",
        "name": "Orange",
        "price": 1.5,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/494037460/fr/photo/orange-fruits-isolé-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=_pEryNNsnApepk4f9AmBSvAtzMosfrcIY5oqb79_nh0=",
        "__v": 0
    },
    {
        "_id": "6668909b5db7ccb7e0515ea9",
        "ref": "F004",
        "category": "Fruits",
        "name": "Mangue",
        "price": 2,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/529964085/fr/photo/mangue.jpg?s=612x612&w=0&k=20&c=5EdxCgV0UYvyQUOlHgM7SULbS45a9z6Ux2mWeQbObV8=",
        "__v": 0
    },
    {
        "_id": "666891955db7ccb7e0515eac",
        "ref": "F005",
        "category": "Fruits",
        "name": "Raisin",
        "price": 3,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/1471483433/fr/photo/grappe-de-raisin-isolée-pile-de-raisins-bleu-foncé-avec-des-feuilles-isolées-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=T4nHNih0CPgqHUe970k_K5e5SbaMjA7qZdco8UXzMgI=",
        "__v": 0
    },
    {
        "_id": "666892aa5db7ccb7e0515eaf",
        "ref": "F006",
        "category": "Fruits",
        "name": "Pasteque",
        "price": 3.5,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/1030334726/fr/photo/tranches-de-melon-deau-rouge-isolé-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=iN5Shkgl8RLdGT52M1QS5NcKLMgYNkb1PDvJe1nYvow=",
        "__v": 0
    },
    {
        "_id": "6668934e5db7ccb7e0515eb2",
        "ref": "F007",
        "category": "Fruits",
        "name": "Ananas",
        "price": 4,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/1217479737/fr/photo/ananas-avec-des-tranches-isolées-sur-le-fond-blanc.jpg?s=612x612&w=0&k=20&c=c46us48XmHudUPQoxr-ZNexyU78csOapcNZ9N5Uvb2k=",
        "__v": 0
    },
    {
        "_id": "666893d45db7ccb7e0515eb5",
        "ref": "F008",
        "category": "Fruits",
        "name": "Kiwi",
        "price": 5,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/482728017/fr/photo/kiwi.jpg?s=612x612&w=0&k=20&c=qw7M1usfGh5hYDvj2eG2nx4YQTGugy8jcWIcPrvVrN4=",
        "__v": 0
    },
    {
        "_id": "666894e05db7ccb7e0515eb8",
        "ref": "F009",
        "category": "Fruits",
        "name": "Fraise",
        "price": 3,
        "unit": "Piéce",
        "image": "https://media.istockphoto.com/id/1130305646/fr/photo/fraise-isolé-deux-ans-et-demi-fraises-isolés-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=v9lkFzXxopkBNXpN-mM0jLhILzpa4NNqgfpAxxBNUwM=",
        "__v": 0
    },

];

   
  
  const Legumes=[
    {
        "_id": "6668980dff63f8e0f56a535e",
        "ref": "L001",
        "category": "Legumes",
        "name": "Tomate",
        "price": 4,
        "unit": "Tomate",
        "image": "https://media.istockphoto.com/id/1459115525/fr/photo/légumes-tomates-isolés-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=PJZUDOxI8vcqOYhWq82-uSQSF9US037PQCexOYCDtfU=",
        "__v": 0
    },
    {
        "_id": "666898b2ff63f8e0f56a5361",
        "ref": "L002",
        "category": "Legumes",
        "name": "Carrot",
        "price": 3,
        "unit": "Carrot",
        "image": "https://media.istockphoto.com/id/92026520/fr/photo/carottes.jpg?s=612x612&w=0&k=20&c=mqBuiduIBD485hBjNdoe4cE6wbskw_hqwZH66SrJQf8=",
        "__v": 0
    },
    {
        "_id": "66689954ff63f8e0f56a5364",
        "ref": "L003",
        "category": "Legumes",
        "name": "Chou",
        "price": 6,
        "unit": "chou",
        "image": "https://media.istockphoto.com/id/1407846014/fr/photo/chou-coupé-en-deux-disolement-sur-le-fond-blanc-avec-le-chemin-de-découpage.jpg?s=612x612&w=0&k=20&c=XAjE404frCEZbdDWWzkhysmptWg9JdTJsMls9mW0Ems=",
        "__v": 0
    },
    {
        "_id": "66689a08ff63f8e0f56a5367",
        "ref": "L004",
        "category": "Legumes",
        "name": "Oignon",
        "price": 3,
        "unit": "Oignon",
        "image": "https://media.istockphoto.com/id/182504322/fr/photo/oignon-rouge-et-or.jpg?s=612x612&w=0&k=20&c=Yc7bETiM6KgfhHWL1q9Sk-7dDllFoPlE7F4DR7uNUXo=",
        "__v": 0
    },
    {
        "_id": "66689aefff63f8e0f56a536a",
        "ref": "L005",
        "category": "Legumes",
        "name": "Aubergine",
        "price": 3,
        "unit": "aubergine",
        "image": "https://media.istockphoto.com/id/173879887/fr/photo/thaï-isolé.jpg?s=612x612&w=0&k=20&c=A-R5IrWEwJg0KD5P4hpBdJ9lB5D2OPWuZ4kcmL3TcxU=",
        "__v": 0
    },
    {
        "_id": "66689b76ff63f8e0f56a536d",
        "ref": "L006",
        "category": "Legumes",
        "name": "Broccoli",
        "price": 5,
        "unit": "broccoli",
        "image": "https://media.istockphoto.com/id/1364035705/fr/photo/frais-brocoli-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=T9Yh7MiU2zFm4zEoqxCKpToreisNSK1DAdNG8uoh4po=",
        "__v": 0
    },
    {
        "_id": "66689c2aff63f8e0f56a5370",
        "ref": "L007",
        "category": "Legumes",
        "name": "Concombre",
        "price": 6,
        "unit": "concombre",
        "image": "https://media.istockphoto.com/id/495383737/fr/photo/concombre.jpg?s=612x612&w=0&k=20&c=vLkquGWW9d6TXQodyRP4OjzFIMGOCZF-aoJuzaQPEGo=",
        "__v": 0
    },
    {
        "_id": "66689cd2ff63f8e0f56a5373",
        "ref": "L008",
        "category": "Legumes",
        "name": "Cornichon",
        "price": 3.2,
        "unit": "cornichon",
        "image": "https://media.istockphoto.com/id/1371468894/fr/photo/cornichon-isolé-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=hcA9FcDC4sL3hrYE999zD9y8AyQbLx8-5f_O2oWb6VA=",
        "__v": 0
    },
    {
        "_id": "66689d73ff63f8e0f56a5376",
        "ref": "L009",
        "category": "Legumes",
        "name": "Gombo",
        "price": 4.5,
        "unit": "gombo",
        "image": "https://media.istockphoto.com/id/586044228/fr/photo/des-jeunes-okra.jpg?s=612x612&w=0&k=20&c=NFpQPzJ3AMAg0IBL3_ZMU3e6wzOHdXn7Go0XcB7Mo40=",
        "__v": 0
    },

];
    
  

  const Boissons=[
    {
        "_id": "666858d2fd06badc1b463ac6",
        "ref": "VR234",
        "category": "Boissons",
        "name": "Vin",
        "price": 12,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/157405246/photo/red-wine-with-property-release.jpg?s=612x612&w=0&k=20&c=L4XVBQKOB5VLFdVAu8cNAWhpowk91dNTCzI70bai2WQ=",
        "__v": 0
    },
    {
        "_id": "66686c67fd06badc1b463ac9",
        "ref": "WH123",
        "category": "Boissons",
        "name": "Whisky",
        "price": 45,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/157674223/fr/photo/kentucky-bourbon-whisky.jpg?s=612x612&w=0&k=20&c=-W-JmhcHJKmRu3zw2znMexUHEdq5ea8U8drTN_h-6u0=",
        "__v": 0
    },
    {
        "_id": "6668724bfd06badc1b463acc",
        "ref": "CP001",
        "category": "Boissons",
        "name": "Champagne",
        "price": 50,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/184992648/fr/photo/bouteille-de-champagne.jpg?s=612x612&w=0&k=20&c=v7l0uZ79Rw2RNHm0Xxjmnf38QeUNGE0bXZ-cbBN2gNc=",
        "__v": 0
    },
    {
        "_id": "66687a7efd06badc1b463ad0",
        "ref": "B002",
        "category": "Boissons",
        "name": "Coca-Cola",
        "price": 1.5,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/458948573/fr/photo/bouteille-de-coca-cola.jpg?s=612x612&w=0&k=20&c=WLkgnE3V6gmu5wqseJbduGqFxnPdD7hv5QLfmyWf3Z4=",
        "__v": 0
    },
    {
        "_id": "66687ea3fd06badc1b463ad3",
        "ref": "B003",
        "category": "Boissons",
        "name": "Fanta",
        "price": 2,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/466196360/fr/photo/fanta-verre-bouteille.jpg?s=612x612&w=0&k=20&c=HAw43zlhgUwriH22kUIWED34jwyNiuyKPp07rXHDJJE=",
        "__v": 0
    },
    {
        "_id": "66688293fd06badc1b463ad6",
        "ref": "B004",
        "category": "Boissons",
        "name": "limonade",
        "price": 3,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/1043444424/fr/photo/bouteille-de-jus-de-citron.jpg?s=612x612&w=0&k=20&c=H7bEQ23hY_aV-BIlPVfphmEaYdAY8zH3VXL24PX3eTc=",
        "__v": 0
    },
    {
        "_id": "6668841dfd06badc1b463ad9",
        "ref": "B010",
        "category": "Boissons",
        "name": "jus d'orange",
        "price": 1.75,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/180734046/fr/photo/jus-dorange.jpg?s=612x612&w=0&k=20&c=ycPm0vsj_ELvXX5WJGlNAF_Lysj0hdYfe5pCHMr91-0=",
        "__v": 0
    },
    {
        "_id": "6668861ffd06badc1b463add",
        "ref": "CRD34",
        "category": "Boissons",
        "name": "Cidre",
        "price": 2.5,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/828564284/fr/photo/bouteille-de-cidre.jpg?s=612x612&w=0&k=20&c=OXVHb-DRVtziq3WS1ZeeAwnBqW7oz3XRzpfLdbF1QX8=",
        "__v": 0
    },
    {
        "_id": "666887cafd06badc1b463ae0",
        "ref": "CRO21",
        "category": "Boissons",
        "name": "Red Bull",
        "price": 4.5,
        "unit": "Bouteille",
        "image": "https://media.istockphoto.com/id/521081698/fr/photo/bouteille-de-verre-de-boisson-rouge-bull-énergie.jpg?s=612x612&w=0&k=20&c=jvSN_DMJH4tUH6xk5XV-9ksheDdkEbPLckRLhz-rEn8=",
        "__v": 0
    },
    
];
    
  
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const loadcategory = (i) => {
    setCategory(i);
  };

  const list = [Fruits, Legumes, Boissons];

  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };

  

  return (
    <Router>
      <Navbar filter={filterResults} setFiltering={setFiltering} />
      <Routes>
        <Route path="/" element={
          <Home 
            loadcategory={loadcategory}
            category={category}
            list={list}
            filtered={filtered}
            isFiltering={isFiltering}
          />
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thank" element={<Thank />} /> 
      </Routes>
    </Router>
  );
};

export default App;
