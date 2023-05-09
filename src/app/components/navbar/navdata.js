export const navbar = [
  {
    id: 1,
    navItem: "Industries",
    link: "/industries",
    icon: true,
  },
  {
    id: 2,
    navItem: "Products",
    link: "/products",
    icon: true,
  },
  {
    id: 3,
    navItem: "Company",
    link: "/",
    icon: true,
  },
  // {
  //   id: 4,
  //   navItem: "Robot Guide",
  //   icon:false
  // },
];

export const HomeDropdown = [
  {
    key: "Industries",
    img: "/assets/img/blog/3.jpg",
    title: "Industries",
    paragraph:
      "Get an overview of all industries that benefit from our wide product range. You will also find various case studies about customer projects that drive our customers’ success",
    children: [
      {
        id: 1,
        parentItem: "Industries",
        link: "/industries",
        // subchildren: [
        //   {
        //     key:"Industries",
        //     children:[{
        //       subchildItem: "Recycling Machines",
        //     },
        //     {
        //       subchildItem: "Solid Waste Management",
        //     },
        //     {
        //       subchildItem: "Hospitality Case Goods",
        //     },
        //     {
        //       subchildItem: "Vending Machines",
        //     },
        //   ]
        //   }
        // ],
      },
      {
        id: 2,
        parentItem: "Recycling Machines",
        link: "/industries/recycling-machines",
      },
      {
        id: 3,
        parentItem: "Solid Waste Management",
        link: "/industries/solid-waste-management",
      },
      {
        id: 4,
        parentItem: "Vending Machines",
        link: "/industries/vending-machines",
      },
      {
        id: 5,
        parentItem: "Hospitality Case Goods",
        link: "/industries/hospitality-case-goods",
      },
    ],
  },
];
export const ProductsDropdown = [
  {
    key: "Products",
    img: "/assets/img/blog/3.jpg",
    title: "Products",
    paragraph:
      "Get an overview of all industries that benefit from our wide product range. You will also find various case studies about customer projects that drive our customers’ success",
    children: [
      {
        id: 1,
        parentItem: "Products",
        link: "/products",
      },
      {
        id: 2,
        parentItem: "Reverse Vending Machines",
        link: "/products/reverse-vending-machines",
        subchildren: [
          {
            key: "Reverse Vending Machines",
            children: [
              {
                subchildItem: "Reverse Vending Machines",
                link: "/products/reverse-vending-machines",
              },
              {
                subchildItem: "RVM Eco",
                link: "/products/reverse-vending-machines/RVM-ECO",
              },
              {
                subchildItem: "RVM Pro",
                link: "/products/reverse-vending-machines/RVM-PRO",
              },
              {
                subchildItem: "RVM Premium",
                link: "/products/reverse-vending-machines/RVM-PREMIUM",
              },
              {
                subchildItem: "RVM DRS 11",
                link: "/products/reverse-vending-machines/DRS-11",
              },
              {
                subchildItem: "RVM DRS 22",
                link: "/products/reverse-vending-machines/DRS-22",
              },
              {
                subchildItem: "RVM DRS 35",
                link: "/products/reverse-vending-machines/DRS-35",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        parentItem: "Organic Waste Composter",
        link: "/products/organic-waste-composter",
        subchildren: [
          {
            key: "Organic Waste Composter",
            children: [
              {
                subchildItem: "Organic Waste Composter",
                link: "/products/organic-waste-composter",
              },
              {
                subchildItem: "END OWC 50",
                link: "/products/organic-waste-composter/OWC-50",
              },
              {
                subchildItem: "END OWC 100",
                link: "/products/organic-waste-composter/OWC-100",
              },
              {
                subchildItem: "END OWC 300",
                link: "/products/organic-waste-composter/OWC-300",
              },
              {
                subchildItem: "END OWC 500",
                link: "/products/organic-waste-composter/OWC-500",
              },
              {
                subchildItem: "END OWC 1000",
                link: "/products/organic-waste-composter/OWC-1000",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        parentItem: "Product Vending Machine",
        link: "/products/product-vending-machine",
        subchildren: [
          {
            key: "Product Vending Machine",
            children: [
              {
                subchildItem: "Product Vending Machine",
                link: "/products/product-vending-machine",
              },
              {
                subchildItem: "Mask Vending Machine",
                link: "/products/product-vending-machine/mask-vending-machine",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const CompanyDropdown = [
  {
    key: "Company",
    img: "/assets/img/blog/3.jpg",
    title: "Company",
    paragraph:
      "Get an overview of all industries that benefit from our wide product range. You will also find various case studies about customer projects that drive our customers’ success",
    children: [
      // {
      //   id: 1,
      //   parentItem: "Company",
      //   link: "",
      // },
      {
        id: 2,
        parentItem: "About Endlos",
        link: "/company/about-endlos",
      },
      {
        id: 3,
        parentItem: "Our Team",
        link: "/company/our-team",
      },
      {
        id: 4,
        parentItem: "Career",
        link: "/company/careers",
      },
      {
        id: 5,
        parentItem: "Location",
        link: "/company/location",
      },
      {
        id: 6,
        parentItem: "Contact",
        link: "/company/contact-us",
      },
      {
        id: 6,
        parentItem: "Blog",
        link: "/company/blog",
      },
    ],
  },
];
