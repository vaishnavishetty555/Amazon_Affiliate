import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import "../pages/shoppingItem.css"

function AllItems() {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log("id", id);

    const allItems = [
        {
            nameCategory: 'Beauty',
            products: [
                {
                    category: "Lotion",
                    nameProduct: "Joy Honey & Almonds Advanced Nourishing Body Lotion",
                    linkProduct: "https://amzn.to/3CyMr6M",
                    imageProduct: "https://m.media-amazon.com/images/I/612ctEDavpL._SL1500_.jpg",
                    descriptionProduct:"90% positive ratings from 50K+ customers , 50K+ recent orders from this brand ,10+ years on Amazon"
                },

                {
                    category: "Suncreen",
                    nameProduct: "Deconstruct Face Gel Sunscreen SPF 50 +",
                    linkProduct: "https://amzn.to/3AMbkeA",
                    imageProduct: "https://m.media-amazon.com/images/I/51VLdPNtSWL._SL1440_.jpg",
                    descriptionProduct:"Deconstruct Face Gel Sunscreen SPF 50 + and PA+++ | Gel based sunscreen for oily skin, combination skin, normal skin | Broad spectrum sunscreen, No White Cast, Lightweight, Non greasy - 50g"                
                },
                {
                    category: "Suncreen",
                    nameProduct: "Minimalist Sunscreen SPF 50 PA++++",
                    linkProduct: "https://amzn.to/40QjBZJ",
                    imageProduct: "https://m.media-amazon.com/images/I/41YdhlLCE4L._SL1100_.jpg",
                    descriptionProduct:"Minimalist Sunscreen SPF 50 PA++++ | Clinically Tested in US (In-Vivo) | Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum Niacinamide Sunscreen For Oily Skin, Dry Skin | For Women & Men | 50g"
                },
                {
                    category: "Suncreen",
                    nameProduct: "Dot & Key Watermelon Hyaluronic Sunscreen SPF 50 PA+++",
                    linkProduct: "https://amzn.to/3Z9UD67",
                    imageProduct: "https://m.media-amazon.com/images/I/51s+i5KcE-L._SL1500_.jpg",
                    descriptionProduct:"Dot & Key Watermelon Hyaluronic Sunscreen SPF 50 PA+++| for Oily, Normal & Combination Skin | UV + Blue Light Protection | Lightweight | No White Cast | Boosts Vitamin D Absorption"
                },
                
                {
                    category: "Lotion",
                    nameProduct: "Parachute Advansed Deep Nourish Body Lotion, Dry Skin",
                    linkProduct: "https://amzn.to/48W9Yuc",
                    imageProduct: "https://m.media-amazon.com/images/I/61dOWQOdclL._SL1500_.jpg",
                    descriptionProduct:"92% positive ratings from 100K+ customers ,100K+ recent orders from this brand ,11+ years on Amazon"
                },
            ]
        },
        {
            nameCategory: 'Jewellery',
            products: [
                {
                    category: "Necklace",
                    nameProduct: "Butterfly Pearl Necklace",
                    linkProduct: "https://amzn.to/4fUb6kB",
                    imageProduct: "https://m.media-amazon.com/images/I/71R2QnSdv+L._SY695_.jpg",
                    descriptionProduct:"Shining Diva Fashion 5 Pcs Combo Latest Stylish Infinity Butterfly Pearl Necklace Jewellery Set for Women Pendant Necklace Gifts for Girls"
                
                },
                {
                    category: "Necklace",
                    nameProduct: "Traditional Jewellery Set ",
                    linkProduct: "https://amzn.to/48WVqec",
                    imageProduct: "https://m.media-amazon.com/images/I/81nHiyg-XTL._SY695_.jpg",
                    descriptionProduct:"Shining Diva Fashion Latest Stylish Fancy Pearl Choker Traditional Jewellery Set for Women | Temple Necklace Set | Festive Wedding Party Necklace"
                
                },
                {
                    category: "Necklace",
                    nameProduct: "Western Necklace Set",
                    linkProduct: "https://amzn.to/3CABIZC",
                    imageProduct: "https://m.media-amazon.com/images/I/61Emq89LIUL._SY695_.jpg",
                    descriptionProduct:"Shining Diva Fashion 5-7 Pcs Combo Latest Stylish Western Necklace Set for Women Pendant Necklace Gifts for Girls"
                
                },
                {
                    category: "Necklace",
                    nameProduct: "Diamond Studded Necklace",
                    linkProduct: "https://amzn.to/40KEHbQ",
                    imageProduct: "https://m.media-amazon.com/images/I/71ooQyvpGCL._SY695_.jpg",
                    descriptionProduct:"ZENEME Rhodium Plated Silver Toned White American Diamond Studded Necklace With Earring Jewellery Set For Woment and Girl"
                
                },
                {
                    category: "Necklace",
                    nameProduct: "Pendant Necklace for Women",
                    linkProduct: "https://amzn.to/4fx1Gvm",
                    imageProduct: "https://m.media-amazon.com/images/I/61C9Fg7N3+L._SY695_.jpg",
                    descriptionProduct:"Salty Vibrant Blue Winged Butterfly Beauty Pendant Necklace for Women & Girls | Modern Design | Birthday & Special Occassion Gift | Aesthetic Jewellery | Accessories for Everyday Wear"
                
                },
                {
                    category: "Earrings",
                    nameProduct: "Pearl Hoop Dangle Earrings",
                    linkProduct: "https://amzn.to/40XtOmS",
                    imageProduct: "https://m.media-amazon.com/images/I/71rDTCqTo3L._SY695_.jpg",
                    descriptionProduct:"Shining Diva Fashion 24 pairs Combo Celebrity Inspired Trendy Latest Stylish Gold Plated Geometric Twist Pearl Hoop Dangle Earrings for Women and Girls"
                },
                {
                    category: "Earrings",
                    nameProduct: "Crystal Pearl Earrings",
                    linkProduct: "https://amzn.to/3OfPenX",
                    imageProduct: "https://m.media-amazon.com/images/I/71SkAVXh7PL._SY695_.jpg",
                    descriptionProduct:"Shining Diva Fashion 30 Pairs Combo Set Latest Stylish Crystal Pearl Earrings for Women and Girls"
                
                },
            ]
        },
        {
            nameCategory:"Painting",
            products:[
                {
                    category:"Painting",
                    nameProduct:"Combo kit of Acrylic Colours",
                    linkProduct:"https://amzn.to/4fB7J2k",
                    imageProduct:"https://m.media-amazon.com/images/I/81lvZ7lXbqL._SX679_.jpg",
                    descriptionProduct:"Pidilite Combo kit of Acrylic Colours, Glass Colours 3D Outliners and Fine Art Canvas with Brushes, Gift set for Students, Children, Artists"
                },
                {
                    category:"Painting",
                    nameProduct:"Watercolour Book",
                    linkProduct:"https://amzn.to/3AMnlk6",
                    imageProduct:"https://m.media-amazon.com/images/I/71oAH5IyOCL._SX679_.jpg",
                    descriptionProduct:"Factor Notes Watercolour Book: A5, 300 GSM Paper, 24 Pages with Perforation, Wiro Bound (Wine Glass)"
                },
                {
                    category:"Painting",
                    nameProduct:"Painting Canvas Pad",
                    linkProduct:"https://amzn.to/3Oaf5O7",
                    imageProduct:"https://m.media-amazon.com/images/I/71t7PS8F5YL._SX679_.jpg",
                    descriptionProduct:"Fevicryl Fine Art Cotton Acrylic Painting Canvas Pad (12 X 16 Inch)"
                },
                {
                    category:"Painting",
                    nameProduct:"Paper Towels",
                    linkProduct:"https://amzn.to/4fQrJNR",
                    imageProduct:"https://m.media-amazon.com/images/I/61iF0B42c1L._SX522_.jpg",
                    descriptionProduct:"Scott 28620 Multifold Paper Towels (M Fold), 250 Pulls/Pack, 24x19.1 cm"
                },
                {
                    category:"Painting",
                    nameProduct:"Wooden Painting Palette",
                    linkProduct:"https://amzn.to/3UVeovO",
                    imageProduct:"https://m.media-amazon.com/images/I/71jr4XvPSDL._SX679_.jpg",
                    descriptionProduct:"ARTIOS Wooden Painting Palette - 37x20cm Handmade Paint Palette with Thumb Hole for Acrylic, Oil, Watercolor, Gouache Painting - for Professional Artists, Art Enthusiasts & Kids"
                },
                {
                    category:"Painting",
                    nameProduct:"Painting Brush",
                    linkProduct:"https://amzn.to/3Z8aMJs",
                    imageProduct:"https://m.media-amazon.com/images/I/612f+d0WVxL._SX679_.jpg",
                    descriptionProduct:"ARTIOS Handmade Professional Artist Painting Brush Set for Acrylic, Watercolor, & Gouache Painting with Brush Holder - Cruelty-Free (15 Assorted Brushes)(Wood), Synthetic Bristle"
                },
                {
                    category:"Painting",
                    nameProduct:"Paint Brush Cleaning and Drying",
                    linkProduct:"https://amzn.to/4eHyQYg",
                    imageProduct:"https://m.media-amazon.com/images/I/51PilfFbmdL._SX679_.jpg",
                    descriptionProduct:"Mont Marte Twin Compartment Plastic Brush Washer. Easy Paint Brush Cleaning and Drying. Suitable for Acrylic and Watercolor Painting."
                },
                {
                    category:"Painting",
                    nameProduct:"Brush Cleaner",
                    linkProduct:"https://amzn.to/4fRVUo4",
                    imageProduct:"https://m.media-amazon.com/images/I/71zg9QSSLiL._SX679_.jpg",
                    descriptionProduct:"General Pencil 28.30 gms The Masters Brush Cleaner and Preserver (White)"
                },
                {
                    category:"Painting",
                    nameProduct:"Varnish ",
                    linkProduct:"https://amzn.to/4eB1BWv",
                    imageProduct:"https://m.media-amazon.com/images/I/61PnnlEccgS._SY879_.jpg",
                    descriptionProduct:"GRANOTONE Acrylic Artist's Varnish Non Yellowing Non Toxic (100 ML HIGH Gloss)"
                },

                
            ]
        }
    ]

    // console.log(allItems[])
    const beautyCategory = allItems?.find(item => item.nameCategory === id);
    console.log(beautyCategory)
    let groupedProducts;




    return (
        <div>
            <AppBar position='static' style={{ background: 'white' }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <div>
                            <ArrowBackIcon onClick={() => navigate(`/`)} style={{ cursor: "pointer", color: "black" }} />
                        </div>
                        <div>

                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
            {/* {
                allItems.find(item => item.nameCategory == id).products.map((product))
            } */}

            {beautyCategory == undefined || [...new Set(beautyCategory.products.map(product => product.category || 'Uncategorized'))].map(category => (

                // <div key={category}>
                <div>
                    <Typography variant="h5"     style={{ margin: "30px 0px 20px 20px" }} >{category}</Typography>

                    <Grid
                        container
                        spacing={2}
                        // className='gridRow'
                        style={{ marginBottom: "100px", padding: "30px" }}
                    >
                        {beautyCategory?.products
                            .filter(product => (product.category || 'Uncategorized') === category)
                            .map((product, index) => (
                                // <div key={index} style={{ marginBottom: '10px' }}>
                                //     <strong>{product.nameProduct || 'No Name Provided'}</strong>
                                //     {product.imageProduct && (
                                //         <div>
                                //             <img
                                //                 src={product.imageProduct}
                                //                 alt={product.nameProduct}
                                //                 width="100"
                                //             />
                                //         </div>
                                //     )}
                                // </div>
                                <Grid item xs={4}>
                                    <Link to={product.linkProduct} target='_blank' style={{textDecoration:"none"}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                src={product.imageProduct}
                                                alt={product.nameProduct}
                                                // alt="green iguana"
                                                // onClick={product.linkProduct}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component="div">
                                                    {product.nameProduct}
                                                </Typography>
                                                <Typography variant='body2' color="text.secondary">
                                                    {product?.descriptionProduct}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Link>
                                </Grid>


                            ))}
                    </Grid>
                </div>
                // </div>

            ))}


        </div>
    )
}

export default AllItems