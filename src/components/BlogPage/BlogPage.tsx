import { IonContent } from '@ionic/react';
import React from 'react';
import styles from './BlogPage.module.css';
import blog2 from '../../assets/blog2.png';
import Invoice from '../../assets/Invoice.jpeg';
import Inventory from '../../assets/Inventory.jpeg';
import Finance from '../../assets/Finance.jpeg';
// import Data from './data.json';

type blogsProp = {
  h2: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;
};

const BlogPage: React.FC<blogsProp> = ({ h2, p1, p2, p3, p4 }) => (
  <IonContent className={styles.BlogPage}>
    <div className={styles.blogs}>
      <img src={blog2} alt=""></img>
      <h2>{h2}</h2>

      <div className={styles.p_more}>
        <p>{p1}</p>
        <p>{p2}</p>
        <img className="images" src={Invoice} alt="" />
        <p>
          <strong>Accounting:</strong> {p3}
        </p>
        <img className="images" src={Finance} alt="" />
        <p>
          <strong>Inventory:</strong> {p4}
        </p>
        <img className="images" src={Inventory} alt="" />
      </div>
    </div>
  </IonContent>
);

export default BlogPage;
