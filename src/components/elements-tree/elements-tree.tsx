import classNames from 'classnames';
import styles from './elements-tree.module.scss';
import ReactSvg from '../../assets/react.svg?react';
import EspeonPng from '../../assets/espeon.png';

export interface ElementsTreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ElementsTree = ({ className }: ElementsTreeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <legend>I am a LEGEND</legend>
            <header>
                <h1>Heading 1</h1>
                <nav>
                    <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                    <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                </nav>
            </header>
            <div>
                <ReactSvg />
            </div>
            <div>
                <audio
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                ></audio>
            </div>
            <main>
                <div>
                    <div>
                        <video
                            controls={true}
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                        ></video>
                        <div>
                            <img src={EspeonPng} alt="essssssspeon" />
                        </div>
                    </div>
                </div>
            </main>
            *//+*+/*+*/-+8I am Espeon, kneel before
            me!!!!!#!$%$^&amp;*(&amp;()_+(*&amp;^&#123;&#125;&#123;&#125;&#123;&#125;POI:&#123;&#125;JHM
            VCVNB
            <form>
                <input type="radio" />
                <button>
                    Button
                    <br />
                    Text
                </button>
                <input type="number" />
            </form>
            <blockquote>&quot;defuq is that&quot;</blockquote>
            <article>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </article>
            <footer>
                <span>
                    <a href="/">Link</a>text
                </span>
            </footer>
            <h6>I am an h6! </h6>{' '}
        </div>
    );
};
