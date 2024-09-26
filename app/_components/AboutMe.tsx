import SectionHeader from "./SectionHeader";

export default function AboutMe() {
  return (
    <div>
      <SectionHeader heading="About Me" />
      <p className="text-balance md:text-justify">
        Computer engineer with a passion for building solutions that actually
        make a difference. With experience in Machine Learning and product
        development, I&apos;ve worked on projects ranging from designing and
        training convolutional neural networks to crafting user experiences with
        React and TailwindCSS. I&apos;ve also dabbled in backend SQL databases
        and Deno Edge functions. Currently focussed on{" "}
        <a href="https://asana.com/resources/agile-methodology" target="_blank">
          Agile
        </a>{" "}
        project design and management.
      </p>
    </div>
  );
}
