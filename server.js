import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import { v4 as uuidv4 } from 'uuid'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/image', express.static('public'))


const PORT = process.env.PORT || 5000;
const BASE_IMAGE_URL = "https://darksole-server.onrender.com/image";

const products = [
    {
        id: uuidv4(),
        name: "Urban Runner",
        price: 89,
        image: `${BASE_IMAGE_URL}/andres-jasso-PqbL_mxmaUE-unsplash.jpg`,
        description: "The Urban Runner blends athletic style with street-ready practicality. Designed with a breathable knit upper and a springy midsole, these sneakers offer the perfect balance of performance and comfort. Whether you're heading to a workout or just cruising downtown, the Urban Runner’s lightweight frame and modern silhouette make it your everyday essential for style and speed."
    },
    {
        id: uuidv4(),
        name: "Trail Blazer",
        price: 129,
        image: `${BASE_IMAGE_URL}/andres-jasso-u4unYsXQHnE-unsplash.jpg`,
        description: "Engineered for adventure, the Trail Blazer is your all-terrain companion. Featuring reinforced soles, water-resistant mesh, and all-day cushioning, these shoes offer superior traction on gravel, mud, and mountain trails. Rugged yet lightweight, it supports every step with durability, whether you're scaling hills or exploring city parks."
    },
    {
        id: uuidv4(),
        name: "Classic Leather",
        price: 149,
        image: `${BASE_IMAGE_URL}/axel-bimashanda-kxUv5PYwtu0-unsplash.jpg`,
        description: "Timeless in design, the Classic Leather redefines everyday elegance. Crafted from genuine leather with hand-stitched details and a softly padded insole, these shoes are a nod to vintage luxury. Perfect for both casual Fridays and weekend brunches, they’re made to elevate any outfit with subtle sophistication and long-lasting comfort."
    },
    {
        id: uuidv4(),
        name: "CloudStep",
        price: 109,
        image: `${BASE_IMAGE_URL}/bp-miller-5MIlHE9sC_Y-unsplash.jpg`,
        description: "Float through your day with the CloudStep. Designed for ultra-light comfort, this shoe features memory foam cushioning, a breathable mesh upper, and cloud-like soles that absorb impact with every step. It’s the perfect choice for people who spend hours on their feet — stylish, supportive, and featherlight."
    },
    {
        id: uuidv4(),
        name: "Velocity Pro",
        price: 139,
        image: `${BASE_IMAGE_URL}/daniel-jankovic-caV9FfMJMDM-unsplash.jpg`,
        description: "Crafted for speed and agility, the Velocity Pro delivers peak performance on the track or the pavement. It features a responsive sole that adapts to your stride, ventilated panels for airflow, and a sleek aerodynamic design. Ideal for runners and athletes, these shoes push you forward with every motion."
    },
    {
        id: uuidv4(),
        name: "City Slick",
        price: 95,
        image: `${BASE_IMAGE_URL}/daniel-storek-JM-qKEd1GMI-unsplash.jpg`,
        description: "Sophisticated yet urban, the City Slick is the ultimate blend of form and function. A favorite among trendsetters, it features a polished outer shell, minimalist design, and all-day padding. Walk city streets in style without compromising comfort — from the office to after-hours hangouts."
    },
    {
        id: uuidv4(),
        name: "All-Day Comfort",
        price: 99,
        image: `${BASE_IMAGE_URL}/ervan-m-wirawan-642Z2aj6gS0-unsplash (1).jpg`,
        description: "Designed to keep you going from morning meetings to evening strolls, All-Day Comfort lives up to its name. Featuring a supportive arch, air mesh fabric, and shock-absorbing technology, it reduces foot fatigue and keeps you fresh. Stylish enough for casual wear, strong enough for daily routines."
    },
    {
        id: uuidv4(),
        name: "From Backend",
        price: 555,
        image: `${BASE_IMAGE_URL}/ervan-m-wirawan-642Z2aj6gS0-unsplash.jpg`,
        description: "A fun nod to developers and sneakerheads alike, 'From Backend' is a bold, standout sneaker built for creatives. Featuring cyber-inspired patterns and an ultra-comfy sole, it's engineered to help you stand tall through long coding sessions, late-night brainstorming, and every coffee break in between."
    },
    {
        id: uuidv4(),
        name: "Zen Step",
        price: 79,
        image: `${BASE_IMAGE_URL}/hamza-ali-xd-r22_jZxE-unsplash.jpg`,
        description: "The Zen Step is where minimalism meets mindfulness. Designed with a soft, seamless interior and ergonomic sole, this shoe promotes calm through comfort. Its neutral tones and breathable knit make it a versatile choice for yoga days, meditation walks, or relaxing weekends."
    },
    {
        id: uuidv4(),
        name: "EcoStride",
        price: 105,
        image: `${BASE_IMAGE_URL}/hipkicks-HcqA34-uWo4-unsplash.jpg`,
        description: "Walk with purpose in the EcoStride — a sustainable sneaker made from recycled materials and eco-friendly dyes. The cushioned sole offers all-day support while reducing your carbon footprint. Feel good, look great, and make a difference one step at a time."
    },
    {
        id: uuidv4(),
        name: "Summit High",
        price: 189,
        image: `${BASE_IMAGE_URL}/imani-bahati-LxVxPA1LOVM-unsplash.jpg`,
        description: "Built for the bold, Summit High is the pinnacle of high-performance hiking footwear. Designed with thermal lining, water-resistant layers, and mountain-grade grip, it keeps you secure on icy trails and steep ascents. Take your next climb in total confidence and unmatched comfort."
    },
    {
        id: uuidv4(),
        name: "Studio Flex",
        price: 85,
        image: `${BASE_IMAGE_URL}/john-vowles-DdfYNNFtIJc-unsplash.jpg`,
        description: "Your go-to trainer for pilates, studio workouts, and casual wear, Studio Flex adapts to your every move. Featuring a flexible outsole, breathable fabric, and a contoured fit, it offers maximum control during side lunges, squats, and stretches. Stay light, focused, and in control."
    },
    {
        id: uuidv4(),
        name: "Chroma Dash",
        price: 115,
        image: `${BASE_IMAGE_URL}/joshua-diaz-VpJNS_H_KHM-unsplash.jpg`,
        description: "Chroma Dash brings color and energy to your run. Designed with dynamic colorways and a responsive foam midsole, it turns heads while boosting your stride. Ideal for runners who want to stand out — it’s bold, bright, and built to move fast."
    },
    {
        id: uuidv4(),
        name: "Monarch Elite",
        price: 299,
        image: `${BASE_IMAGE_URL}/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg`,
        description: "Rule your world in the Monarch Elite, a luxury sneaker that redefines royalty. Handcrafted with fine Italian leather, gold trim, and precision stitching, it’s a shoe made for leaders and visionaries. Bold yet classy, it’s for those who walk with purpose and power."
    },
    {
        id: uuidv4(),
        name: "Commuter Glide",
        price: 92,
        image: `${BASE_IMAGE_URL}/luis-felipe-lins-S6Cp3uN39_M-unsplash.jpg`,
        description: "The Commuter Glide is designed for smooth transitions from morning to night. Whether you're biking to work or walking to lunch, its cushioned sole and sleek profile provide the support and style you need. Lightweight, versatile, and street-smart — glide through your day effortlessly."
    },
    {
        id: uuidv4(),
        name: "Forge XT",
        price: 159,
        image: `${BASE_IMAGE_URL}/mojtaba-mosayebzadeh-WtHNuoYQLgs-unsplash.jpg`,
        description: "Forge XT is built for the relentless. Designed for high-impact training, it features reinforced stability zones, ultra-durable materials, and a power-enhancing sole. Whether you're lifting, sprinting, or crushing HIIT workouts, Forge XT gives you the edge to dominate every session."
    }
];


let cart = []

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.post("/cart/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const alreadyInCart = cart.some((item) => item.id === id);

    if (!alreadyInCart) {
        cart.push(product); // add product directly
    }

    res.status(200).json({ message: "Product added to cart", cart });
});


app.get("/cart", (req, res) => {
    res.json(cart)
})

app.delete("/cart/:id", (req, res) => {
    const id = req.params.id;
    const initialLength = cart.length;
    cart = cart.filter(item => item.id !== id);

    if (cart.length === initialLength) {
        return res.status(404).json({ message: "Product not found in cart" });
    }

    res.status(200).json({ message: "Product removed from cart", cart });
});

app.delete("/cart", (req, res) => {
    cart = [];
    res.status(200).json({ message: "Cart cleared" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});