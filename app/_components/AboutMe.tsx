import SectionHeader from "./SectionHeader";

export default function AboutMe() {
  return (
    <div>
      <SectionHeader heading="About Me" />
      <p className="text-balance">
        Computer engineer with a passion for building solutions that actually
        make a difference. With experience in machine learning and product
        development, I&apos;ve worked on projects ranging from system design to
        training convolutional neural networks to building user experiences with
        React and TailwindCSS. I&apos;ve also dabbled in backend SQL databases
        and Edge functions.
        {/* Currently focussed on{" "}
        <a href="https://asana.com/resources/agile-methodology" target="_blank">
          Agile
        </a>{" "}
        project design and management. */}
      </p>
    </div>
  );
}
