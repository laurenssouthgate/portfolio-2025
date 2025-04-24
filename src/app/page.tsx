import Layout from "@/app/components/layout/Layout";
import FullPageSection from "@/app/components/common/FullPageSection";
import Content from "@/app/components/common/Content";
import Image, {StaticImageData} from "next/image";
import RoundButton from "@/app/components/common/RoundButton";
import gitHubIcon from "../../public/img/github-logo.svg"
import externalLinkIcon from "../../public/img/external-link.svg"
import portfolioPreview from "../../public/img/portfolio.webp"

type ProjectCardProps = {
    imgSrc: StaticImageData
    projectTitle: string
    technologies: string
    description: string
    gitHub: string
    liveDemo: string
}

const ProjectCard = ( {
                          imgSrc,
                          projectTitle,
                          technologies,
                          description,
                          liveDemo,
                          gitHub } : ProjectCardProps) => {
    return (
        <div className="project-card">
            <Image src={ imgSrc } alt={ `${ projectTitle } screenshot` } />
            <h3>{ projectTitle }</h3>
            <div className="hr"></div>
            <p className="project-tech">{ technologies }</p>
            <p className="project-description">{ description }</p>
            <div className="project-links flex gap-2">
                <RoundButton img={ externalLinkIcon } link={ liveDemo } title={ `${ projectTitle } live demo` } />
                <RoundButton img={ gitHubIcon } link={ gitHub } title={ `${ projectTitle } GitHub repository` } />
            </div>
        </div>
    )
}
export default function Home() {
    return (
        <Layout>
            <FullPageSection id={ 'hero' } className={ 'hero' }>
                <Content>
                    <div className="hero-content">
                        <h1>Where Creativity Meets Code</h1>
                        <p>From interactive 3D ads to dynamic poetry generators, I blend creativity with React, TypeScript,
                            and AI to build visually engaging, user-centered web applications.</p>
                    </div>
                </Content>
            </FullPageSection>
            <FullPageSection id={ 'projects' } className={ 'projects' }>
                <Content className="h-screen flex flex-col justify-center" narrow={ true }>
                    <h2>Things I&#39;ve Built</h2>
                    <div className="project-cards">
                        <ProjectCard
                            imgSrc={ portfolioPreview }
                            projectTitle="This Website"
                            technologies="Next.js, CSS, Tailwind CSS, Blender"
                            description="This portfolio was created using Next.js. All graphics were created by me using
                            Blender 3D modelling software. Styled using modular CSS/Tailwind."
                            liveDemo="/"
                            gitHub="https://github.com/laurenssouthgate/portfolio-2025"
                        />
                        <ProjectCard
                            imgSrc={ portfolioPreview }
                            projectTitle="Random Poetry Generator"
                            technologies="React.js, JSON, CSS, Cursor AI, ChatGPT"
                            description="A creative app that uses an AI generated bank of words, and sentences to form
                            random poems that you can share with friends."
                            liveDemo="/"
                            gitHub="https://github.com/laurenssouthgate/portfolio-2025"
                        />
                        <ProjectCard
                            imgSrc={ portfolioPreview }
                            projectTitle="This Website"
                            technologies="Next.js, CSS, Tailwind CSS, Blender"
                            description="This portfolio was created using Next.js. All graphics were created by me using
                            Blender 3D modelling software. Styled using modular CSS/Tailwind."
                            liveDemo="/"
                            gitHub="https://github.com/laurenssouthgate/portfolio-2025"
                        />
                    </div>
                </Content>
            </FullPageSection>
        </Layout>
    );
}
