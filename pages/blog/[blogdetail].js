import Image from 'next/image';
import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import FooterDetail from '../../components/FooterDetail/FooterDetail';
import image3 from '../../images/recentwork3.jpg';
import image2 from '../../images/recentwork4.jpg';
import image1 from '../../images/recentwork6.jpg';
import style from '../../styles/blogdetail.module.scss';

const blogList = [
    {
        id: 1,
        image: image3,
        createdAt: '15 November 2018',
        title: 'Best buildings of 2018 revealed at day one of World Architecture Festival 2018.',
    },
    {
        id: 2,
        image: image2,
        createdAt: '25 July 2003',
        title: 'Sunken washroom by Studio 304 allows residents to bathe in a garden setting.',
    },
    {
        id: 3,
        image: image3,
        createdAt: '15 November 2011',
        title: 'Buildings of 2018 revealed at day one of World Architecture Festival 2010.',
    },
];

function BlogDetail() {
    return (
        <div className={style.blog_detail_page}>
            <div className={style.blog_detail_header}>
                <Image
                    src={image1}
                    alt="header-img"
                    className={style.blog_detail_header_img}
                    height={550}
                />

                <div className={style.blog_detail_header_txt}>
                    <h1>
                        Best buildings of 2018 revealed at day one of World Architecture Festival
                        2018.
                    </h1>
                    <small>
                        13 June 2018, <span className={style.blog_detail_tags}>Architechure</span>
                    </small>
                </div>
            </div>

            <div className={style.blog_detailss}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, consequuntur
                    odit unde voluptatum odio ipsa iusto quo numquam quod laudantium libero eos in
                    recusandae rem atque a nemo est dicta maxime quam natus quas minus deleniti.
                    Iusto maxime quae accusamus, incidunt voluptatem sequi quisquam ut iure
                    temporibus. Dignissimos ipsa, corporis hic, minima sed quos quod reprehenderit,
                    enim inventore doloribus veritatis iste sint nihil aut consectetur itaque nulla
                    mollitia excepturi dolorem cumque tenetur porro ratione nam numquam? Laudantium
                    commodi quasi sit, culpa ex nihil molestias illum ratione nulla laboriosam
                    eligendi fugit accusamus alias dolores sequi voluptatibus odit assumenda saepe
                    voluptate quas unde sapiente ullam tenetur. Possimus nobis vel obcaecati maxime
                    placeat debitis? Cupiditate illo, aperiam facere dignissimos expedita numquam
                    cum adipisci dicta modi deserunt enim quod beatae necessitatibus vel aliquam
                    doloribus repellat amet blanditiis a consequatur exercitationem sapiente quae
                    odio reiciendis. Placeat deserunt inventore sit voluptas magnam ipsa hic
                    aliquid. Cum, debitis sed! Harum eligendi eos a dolorem ea aspernatur quasi
                    veniam repudiandae laboriosam quam atque tempore voluptatum eius soluta culpa,
                    unde officia nam sunt. Optio alias minus totam laudantium! Aspernatur beatae
                    veniam molestias deserunt animi ab odit doloremque architecto! Sapiente quisquam
                    beatae consequuntur temporibus enim ratione esse perferendis eaque. Illum.
                </p>
                <br />
                <p>
                    <b>Think about it:</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis amet distinctio accusantium esse iusto, sapiente dolorum harum,
                    repudiandae asperiores qui numquam veniam cupiditate corporis eveniet libero
                    commodi consectetur iure eius debitis dolorem voluptates saepe architecto.
                    Voluptate deserunt dolore debitis sint perferendis? Temporibus ab deserunt nihil
                    perferendis et vel illum vitae odio cupiditate nam. Quaerat, numquam incidunt?
                    Omnis error vitae obcaecati perspiciatis, laudantium temporibus. Obcaecati
                    fugiat voluptatem eum dolorem, adipisci vero, alias, quas fugit inventore eaque
                    dolore? Expedita magni porro, ducimus culpa quis vero suscipit ipsa sapiente?
                    Incidunt dicta rem aperiam, quisquam minus deserunt? Molestiae similique quos
                    culpa deserunt provident cupiditate aliquid, corporis earum iusto accusamus
                    quaerat officia fugiat et asperiores voluptas temporibus facilis laborum
                    voluptatem. Odit velit consectetur minima nulla iure eveniet, eum ducimus
                    quaerat accusamus magnam aspernatur consequatur voluptate voluptatum, unde
                    veniam quasi eaque, facilis laudantium! Ipsa vel ea molestias quibusdam deserunt
                    quidem veniam iure, voluptate quos saepe eum. Facilis nulla nisi quod reiciendis
                    autem. Quam, nisi sunt aspernatur voluptatem mollitia vero illum laboriosam
                    possimus repudiandae sed aut perferendis sapiente esse ipsam tenetur eaque ipsum
                    in cum! Laudantium provident incidunt libero quam tenetur voluptatem corrupti
                    cumque blanditiis soluta dolor asperiores obcaecati optio sed doloribus atque ab
                    nam, consequuntur quibusdam?
                </p>
                <br />

                <h2 className={style.title2}>
                    <i>“Dreams and dedication are powerful combination.”</i>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi
                    quisquam obcaecati velit nihil quis! Natus ullam, praesentium minima
                    voluptatibus autem totam perspiciatis. Praesentium voluptatibus ipsam et quo
                    molestiae culpa autem eaque ipsum sit, placeat deserunt obcaecati sunt atque.
                    Omnis corrupti dolore cum fugit pariatur iusto numquam iste fugiat soluta facere
                    quisquam, expedita saepe molestias amet vel neque? Nisi placeat atque
                    distinctio, magnam vero laborum, assumenda animi nobis laudantium non ipsum.
                    Veritatis fuga delectus obcaecati accusamus suscipit provident soluta tenetur
                    esse, atque error temporibus saepe numquam, voluptatum velit quae cum?
                    Voluptates molestias reiciendis magnam sapiente incidunt modi neque hic. Harum
                    delectus quae cumque quod sequi inventore explicabo reiciendis blanditiis
                    dignissimos minus dolorem nostrum consequuntur illo ipsa quas amet quaerat,
                    iusto animi fugiat dolor. Illum earum fugiat assumenda dolore provident. Ad
                    dignissimos cupiditate numquam nesciunt tempore a magnam amet doloribus
                    similique. Necessitatibus illo aperiam odio dolorum eveniet soluta id assumenda
                    magnam sapiente, optio minus, omnis ducimus et rem culpa facilis dolorem tempora
                    dolor. Amet molestiae nobis perspiciatis repudiandae hic repellat. Non vero
                    iusto pariatur dolorem distinctio veniam, id quas placeat mollitia, illum
                    incidunt nemo voluptatibus impedit suscipit blanditiis quasi nam et unde. Ipsam
                    error similique sunt illum explicabo a hic placeat?
                </p>
                <br />

                <h2>List of features</h2>
                <ul>
                    <li>Reusable components</li>
                    <li>Multiple niches</li>
                    <li>Lightning fast</li>
                    <li>BEM methodology</li>
                </ul>

                <h2>Summary</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum nam illum
                    accusamus eaque molestias libero, veniam maxime, sequi accusantium ea error illo
                    soluta repudiandae est beatae id doloribus ut fuga modi qui dolorum. Maxime
                    autem inventore nemo placeat a beatae tempore est id fuga corrupti, error optio
                    numquam et animi esse facilis excepturi maiores! Velit laboriosam saepe illum
                    consectetur veniam nemo totam aliquid nam repudiandae magnam tempora
                    exercitationem, quaerat debitis distinctio omnis maxime sapiente commodi.{' '}
                </p>
            </div>

            <div className={style.blog_bottom}>
                <h1>You might also like</h1>
                <BlogCard bloglist={blogList} />
            </div>

            <FooterDetail />
        </div>
    );
}

export default BlogDetail;
