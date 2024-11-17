import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

function ShoppingItems() {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  return (
    <div>
      <AppBar position='static' style={{ background: 'white' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <div>
              <ArrowBackIcon onClick={() => navigate(`/Shopping`)} style={{ cursor: "pointer", color: "black" }} />
            </div>

          </Toolbar>
        </Container>
      </AppBar>




      <div className='shoppingItemName'>Must have {id} essentials</div>

      <div style={{display:'flex'}}> 
      <div style={{width:"50%",display:"flex",alignItems:"center"}}>
        <img style={{ width: "-webkit-fill-available" }} src={require(`../images/${id}.png`)} />
      
      </div>
      
      {/* Camping */}
      <div style={{width:"50%",marginTop:"100px" , display:id == 'camping' ?'':'none' }}>
      {/* <div className='moreInfo'>
        To find more information about the item click on the link.
      </div> */}

      <ol className='allItem' style={{display:id == 'camping' ?'contents':'none' }}>
      <li>
          <Link to={`https://amzn.to/3yRUI3X`} target='_blank' className='linkStyle' >Camping Tent Adults</Link>
          {/* <span> - Eaiser Clip Setup , Heavy Rainproof & Windproof , Lightweight & Portable , Cool Ventilation.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3XfNcKa`} target='_blank' className='linkStyle'>Camping Stove</Link>
          {/* <span> - Portable Gas Stove And Picnic Butane Gas Burner For Outdoor Camping, Hiking, Mini gas stove,Stainless Steel body, Folding Furnace.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3Xku3a9`} target='_blank' className='linkStyle'>Camping kichen</Link>
          {/* <span> - Accessories for Outdoor Mess Kit,Cooking Equipment 10 Piece Cookset.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4ccpdQs`} target='_blank' className='linkStyle'>GREEN Disposable bagasse</Link>
          {/* <span> - Eco-Friendly | Made with sugarcane | for Dry and Gravy Items| Party Essentials.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3VudPK1`} target='_blank' className='linkStyle'>Aluminum Butane Gas</Link>
          {/* <span> - Aluminum Butane Gas Canister for Camping</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3RjS9xX`} target='_blank' className='linkStyle'>Chiller Ice Box</Link>
          {/* <span> - Standard Size for Travel Party Bar Ice Cubes | Cold Drinks</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/45hXOdF`} target='_blank' className='linkStyle'>Cleaner Dust Collection</Link>
          {/* <span> - This Cleaner is Portable, Lightweight, Compact, Washable Filter,</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4c3z0s4`} target='_blank' className='linkStyle'>Rechargeable Camping Lights</Link>
          {/* <span> - Lights Waterproof LED Bulb Tent Lights with USB Cable 3 Modes Hanging Camping Lantern, Hanging Lamp for Hiking, Emergency, Camping, Household, Car Repairing</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4b9Yp2p`} target='_blank' className='linkStyle'>Portable Travel Bidet</Link>
          {/* <span> - 500ml Portable Retractable Travel Bidet for Toilet Handheld Postpartum Perineal Cleansing Childbirth Cleaner</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4ccP22M`} target='_blank' className='linkStyle'>Sun Protection Cap</Link>
          {/* <span> - Sun Protection Cap, Beach Fishing Hat, Summer Hat , Round Sun Cap for Hiking, Fishing, Gardning, Travel</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/45x1aJX`} target='_blank' className='linkStyle'>Ankle Socks for Men & Women</Link>
          {/* <span> - Antonio Benedetto 4 Pairs Athletic Ankle Socks for Men & Women</span> */}
        </li>

        <li>
           <Link to={`https://amzn.to/3Vh15Fj`} target='_blank' className='linkStyle'>Sturdy Foldable Camping Chair</Link>
          {/* <span> - Camping Chair with Attached Can Cooler and Cup Holder</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3XeZv9z`} target='_blank' className='linkStyle'>Torch Light</Link>
          {/* <span> - Torch Flashlight,Long Distance Beam Range</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4cuqvqb`} target='_blank' className='linkStyle'>Travel backpack</Link>
          {/* <span> - travel backpack for hiking trekking Bag</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3RnMsyP`} target='_blank' className='linkStyle'>Bottle with Carry Loop</Link>
          {/* <span> - Symactive Leakproof Unbreakable Gallon Bottle with Carry Loop</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4ee2c1a`} target='_blank' className='linkStyle'>Camping Mattress</Link>
          {/* <span> - Bed-Camping Mattress-Portable Travel,Sleeping</span> */}
        </li>
        <li>
           <Link to={`hhttps://amzn.to/3VdCPUI`} target='_blank' className='linkStyle'>Hanging Bed</Link>
          {/* <span> - Hanging Bed for Camping & Outdoor Activities </span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3RjTnJc`} target='_blank' className='linkStyle'>Camping Water Container</Link>
          {/* <span> - Outdoor Folding Water Tank for Sport Camping Riding Mountaineer Hiking (12L)</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4c6UZOs`} target='_blank' className='linkStyle'>Electric Espresso Machine Carrying Bag</Link>
          {/* <span> - Electronic Coffee Maker Storage Case with Comfortable Hand Hold Belt </span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/45iY6Ry`} target='_blank' className='linkStyle'>Neck Pillow</Link>
          {/* <span> - Lifelong Pillow for Camping </span> */}
        </li>
        
      </ol>
      </div>






       {/* Painting */}
       <div style={{width:"50%",marginTop:"100px" , display:id == 'painting' ?'':'none' }}>
      <ol className='allItem' style={{display:id == 'painting' ?'contents':'none' }}>
      <li>
          <Link to={`https://amzn.to/3yManl2`} target='_blank' className='linkStyle' >Combo kit of Acrylic Colours</Link>
          {/* <span> - Combo kit of Acrylic Colours, Glass Colours 3D Outliners and Fine Art Canvas with Brushes, Gift set for Students, Children, Artists.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3KB7beQ`} target='_blank' className='linkStyle'>Watercolour Book</Link>
          {/* <span> - Factor Notes Watercolour Book: A5, 300 GSM Paper, 24 Pages with Perforation.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3xaVloC`} target='_blank' className='linkStyle'>Acrylic Painting Canvas Pad</Link>
          {/* <span> - Pidilite Fine Art Cotton Acrylic Painting Canvas Pad.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3VzQg2G`} target='_blank' className='linkStyle'>Wooden Painting Palette</Link>
          {/* <span> - Handmade Paint Palette with Thumb Hole for Acrylic, Oil, Watercolor, Gouache Painting - for Professional Artists, Art Enthusiasts & Kids.</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/3x8HaQQ`} target='_blank' className='linkStyle'>Painting Brush Set</Link>
          {/* <span> - Handmade Professional Artist Painting Brush Set for Acrylic, Watercolor, & Gouache Painting with Brush Holder</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4ebH7EB`} target='_blank' className='linkStyle'>Paint Brush Cleaning and Drying</Link>
          {/* <span> - Easy Paint Brush Cleaning and Drying. Suitable for Acrylic and Watercolor Painting</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4bQhIyN`} target='_blank' className='linkStyle'>Paper Towels</Link>
          {/* <span> - Multifold Paper Towels</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4c6C8nr`} target='_blank' className='linkStyle'>The Masters Brush Cleaner and Preserver</Link>
          {/* <span> - It cleans, conditions, and restores paint brushes in one step</span> */}
        </li>
        <li>
           <Link to={`https://amzn.to/4aVDekc`} target='_blank' className='linkStyle'>Acrylic Varnish </Link>
          {/* <span> - GRANOTONE Acrylic Artist's Varnish Non Yellowing Non Toxic, this varnish ensures a lasting crystal clear finish that resists yellowing.</span> */}
        </li>
       
       
       
        
        
        
      </ol>
      </div>
      </div>
    </div>
  )
}

export default ShoppingItems