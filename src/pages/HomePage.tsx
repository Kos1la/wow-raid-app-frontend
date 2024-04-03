import discordImage from "../assets/discord-svgrepo-com.svg";
import telegramImage from "../assets/telegram-svgrepo-com.svg";
import twitchImage from "../assets/twitch-v2-svgrepo-com.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-neutral-900 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-xl md:text-4xl font-bold tracking-tight text-red-300'>
          Get a full raid with professional raid leader
        </h1>
        <span className='text-sm text-white md:text-xl'>
          Raid is just a click away
        </span>
      </div>

      <div className='flex items-center space-x-4'>
        <h3 className='text-xl md:text-2xl font-bold text-white'>Our links:</h3>
        <a href='https://discord.com/' target='_blank'>
          <img src={discordImage} alt='' className='w-8 md:w-12' />
        </a>
        <a href='https://discord.com/' target='_blank'>
          <img src={telegramImage} alt='' className='w-8 md:w-12' />
        </a>
        <a href='https://discord.com/' target='_blank'>
          <img src={twitchImage} alt='' className='w-8 md:w-12' />
        </a>
      </div>
      <Accordion type='single' collapsible className='text-white'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it garantee full raid?</AccordionTrigger>
          <AccordionContent>
            Yes. We going full raid if for some reason we fucked up u loot next
            raid for free
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>This is save for my account?</AccordionTrigger>
          <AccordionContent>
            Yes.If u choose pilot we use vpn from your country and city, if
            selfplay is surely safe method
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>How it works?</AccordionTrigger>
          <AccordionContent>
            We create a raid with time u comfortable and then invite u, u dont
            need to waste time to find a raid and be sure u got it clear and fun
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
