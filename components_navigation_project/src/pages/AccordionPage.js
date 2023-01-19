import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:khjkhj3,
            label:'Can I use React on a project?',
            content: 'You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.'
        },
        {
            id:khjkhj4,
            label:'Can I use Javascript on a project?',
            content: 'You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.'
        },
        {
            id:khjkhj5,
            label:'Can I use CSS on a project?',
            content: 'You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.'
        }, 
        
    ]

    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;