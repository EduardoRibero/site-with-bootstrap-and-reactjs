import React from 'react'
import styles from './Home.module.css'
import Btn from '../compoentes/btn'

const Home = () => {
  return (
    <div>
        <div className={styles.main}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto velit odit, eveniet vitae at facere harum rerum laboriosam recusandae temporibus quo consectetur qui laborum suscipit accusamus numquam laudantium debitis.</h1>
            <Btn>Budget</Btn>
        </div>
        <div className={styles.service}>
            <article className={styles.revers}>
                <img src="https://static3.depositphotos.com/1010695/262/i/450/depositphotos_2622490-stock-photo-restoration-works-the-house-painter.jpg" alt="imgPintura" />
                <div>
                    <h3>Pintura</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
                    <Btn>More</Btn>
                </div>
            </article>
            <article className={styles.revers2}>
                <img src="https://lh5.googleusercontent.com/proxy/R_GTAXtefZ-VJpXJHhguKFynsRRBiKpuJxrajWag8ZosIyn3XTBzNjj6OXc7TIlzneD3sRs9gzpRs-B6Kl_hnKb0H2KbEFclw7gedjA" alt="imgAcabamento" />
                <div>
                    <h3>Acabamento</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
                    <Btn>More</Btn>
                </div> 
            </article>
            <article className={styles.revers}>
                <img src="https://www.centraldalapa.com/wp-content/uploads/2016/11/Um-aumento-na-demanda-de-equipamentos-requereu-melhores-instalaes-eltricas.jpg" alt="imgEletrica" />
                <div>
                    <h3>Elétrica</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
                    <Btn>More</Btn>
                </div>
            </article>
            <article className={styles.revers2}>
                <img src="https://faculdadeeleven.com.br/wp-content/uploads/2024/01/curso-de-reparos-e-reformas-hidraulica.webp" alt="imgReparos" />
                <div>
                    <h3>Reparos</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
                    <Btn>More</Btn>
                </div>
            </article>
        </div>
        <div className={styles.historic}>
            <div> 
                <img src="https://img.myloview.com.br/posters/construtor-icone-transparente-design-de-simbolo-de-construtor-de-colecao-de-profissoes-400-147343245.jpg" alt="imgMarket" />
                <h3>On the market for over 10 years.</h3>
            </div>
            <div>
                <img src="https://img.myloview.com.br/posters/repair-tools-transparent-icon-repair-tools-symbol-design-from-user-interface-collection-400-167160203.jpg" alt="imgClient" />
                <h3>More than 1000 satisfied customers!</h3>
            </div>
        </div>
        <div className={styles.assessment}>
            <article>
                <div className={styles.profile}>
                    <img src="https://www.otimizy.com.br/wp-content/uploads/2017/05/atendimento-ao-cliente.jpg" alt="imgClient" />
                    <h4>Edivandro Reirs</h4>
                </div>
                <div className={styles.star}>
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
            <article>
                <div className={styles.profile}> 
                    <img src="https://www.salesforce.com/br/blog/wp-content/uploads/sites/6/2023/06/blog-satisfacao-do-cliente.png" alt="imgClient" />
                    <h4>Aline Morais Reirs</h4>
                </div>
                <div className={styles.star}>
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
            <article>
                <div >
                    <img src="https://negocieapp.com.br/wp-content/uploads/2020/05/cliente-feliz.jpg" alt="imgClient" />
                    <h4>Carlos Umberto</h4>
                </div>
                <div className={styles.star}>
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
        </div>
    </div>
  )
}

export default Home