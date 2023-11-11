const AboutPageSidePanel = ({ header, content }) => {
  return (
    <div className="flex flex-col bg-gray-200/20 rounded-3xl shadow-lg w-[380px] h-[500px] justify-center items-center p-2 space-y-5 animate-fade-down">
      <h1 className="text-4xl">{header}:</h1>
      <p className="text-lg text-justify">{content}</p>
    </div>
  );
};
export default AboutPageSidePanel;
