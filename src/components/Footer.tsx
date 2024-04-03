const Footer = () => {
  return (
    <div className='bg-red-600 py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <span className='text-2xl md:text-3xl text-neutral-900 font-bold tracking-tight'>
          WowRaid.com
        </span>
        <span className='text-neutral-900 font-bold  tracking-tight flex gap-4'>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
