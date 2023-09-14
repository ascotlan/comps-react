import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'sdfsfg',
      label: "Can I use React on a project?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt neque ut diam viverra, eget ullamcorper magna lacinia. Sed sit amet nisl quis nibh mattis porttitor. Duis turpis dui, porttitor eget nisl sit amet, pellentesque auctor elit. Mauris vitae mauris nibh. Praesent bibendum tristique lorem vitae rutrum.",
    },
    {
      id:'hghgh',
      label: "Can I use Javascript on a project?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt neque ut diam viverra, eget ullamcorper magna lacinia. Sed sit amet nisl quis nibh mattis porttitor.",
    },
    {
      id:'dfbtger',
      label: "Can I use HTML on a project?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt neque ut diam viverra, eget ullamcorper magna lacinia. Sed sit amet nisl quis nibh mattis porttitor. Duis turpis dui, porttitor eget nisl sit amet, pellentesque auctor elit.",
    },
  ];

  return <Accordion items={items}/>;
}

export default App;
