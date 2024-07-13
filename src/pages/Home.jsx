import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="Main">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto velit odit, eveniet vitae at facere harum rerum laboriosam recusandae temporibus quo consectetur qui laborum suscipit accusamus numquam laudantium debitis.</h1>
            <img src="https://www.area17.com.br/admin/fotos/estabelecimentos/construpint-reformas-em-geral-jarinu-55621_63604ee237bba.jpg" alt="HomeImg"/>
        </div>
        <div className="Services">
            <article className="Pintura">
                <img src="https://static3.depositphotos.com/1010695/262/i/450/depositphotos_2622490-stock-photo-restoration-works-the-house-painter.jpg" alt="imgPintura" />
                <h3>Pintura</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
            </article>
            <article className="Acabamento">
                <img src="https://lh5.googleusercontent.com/proxy/R_GTAXtefZ-VJpXJHhguKFynsRRBiKpuJxrajWag8ZosIyn3XTBzNjj6OXc7TIlzneD3sRs9gzpRs-B6Kl_hnKb0H2KbEFclw7gedjA" alt="imgAcabamento" />
                <h3>Acabamento</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
            </article>
            <article className="Eletrica">
                <img src="https://www.centraldalapa.com/wp-content/uploads/2016/11/Um-aumento-na-demanda-de-equipamentos-requereu-melhores-instalaes-eltricas.jpg" alt="imgEletrica" />
                <h3>Elétrica</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
            </article>
            <article className="Reparos">
                <img src="https://faculdadeeleven.com.br/wp-content/uploads/2024/01/curso-de-reparos-e-reformas-hidraulica.webp" alt="imgReparos" />
                <h3>Reparos</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, et veniam harum, culpa perferendis unde voluptatum laborum labore natus at nobis tempore libero ipsum fuga ab accusantium error, soluta necessitatibus!</p>
            </article>
        </div>
        <div className="Historic">
            <div>
                <img src="https://img.myloview.com.br/posters/construtor-icone-transparente-design-de-simbolo-de-construtor-de-colecao-de-profissoes-400-147343245.jpg" alt="imgCarreira" />
                <h3>No mercado a mais de 10 anos.</h3>
            </div>
            <div>
                <img src="https://img.myloview.com.br/posters/repair-tools-transparent-icon-repair-tools-symbol-design-from-user-interface-collection-400-167160203.jpg" alt="imgClient" />
                <h3>Mais de 1000 clinetes satisfeitos!</h3>
            </div>
        </div>
        <div className="Assessment">
            <article>
                <img src="https://www.otimizy.com.br/wp-content/uploads/2017/05/atendimento-ao-cliente.jpg" alt="imgClient" />
                <h4>Edivandro Reirs</h4>
                <div className="star">
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
            <article>
                <img src="https://www.salesforce.com/br/blog/wp-content/uploads/sites/6/2023/06/blog-satisfacao-do-cliente.png" alt="imgClient" />
                <h4>Aline Morais Reirs</h4>
                <div className="star">
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
            <article>
                <img src="https://negocieapp.com.br/wp-content/uploads/2020/05/cliente-feliz.jpg" alt="imgClient" />
                <h4>Carlos Umberto</h4>
                <div className="star">
                    ⭐⭐⭐⭐
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem mollitia magnam quibusdam similique quam delectus, consequuntur voluptatum exercitationem doloribus. Consequatur aliquid, at architecto earum deserunt doloribus fugit dolorum ab eaque!</p>
            </article>
        </div>
    </div>
  )
}

export default Home