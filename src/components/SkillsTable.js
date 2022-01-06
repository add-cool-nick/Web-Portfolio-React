import React from 'react';
import './styles/skillstable.css';

const SkillsTable = () => {
    return (
        <div>
            <div className="periodic-table">
            <div className="empty-spacer-1"></div>
            <div className="empty-spacer-2"></div>
            <div className="periodic-element social-media" data-description="I use for all my basic web dev needs!">
                <div className="periodic-element-inner">
                    <div className="title">Ht</div>
                    <div className="description">HTML</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="My goto platform for building backend">
                <div className="periodic-element-inner">
                    <div className="title">Fb</div>
                    <div className="description">Firebase</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="Simple and fast!">
                <div className="periodic-element-inner">
                    <div className="title">Cpp</div>
                    <div className="description">C++</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="Good software for making microprocessor circuit designs">
                <div className="periodic-element-inner">
                    <div className="title">Pt</div>
                    <div className="description">Proteus</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="Great for creating 2D and 3D designs">
                <div className="periodic-element-inner">
                    <div className="title">Ac</div>
                    <div className="description">AutoCAD</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="My Favorite frontend Framework">
                <div className="periodic-element-inner">
                    <div className="title">Vu</div>
                    <div className="description">VueJS</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="Extremely powerful. Love it!">
                <div className="periodic-element-inner">
                    <div className="title">Py</div>
                    <div className="description">Python</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Probably the best NoSQL databasae" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Md</div>
                    <div className="description">MongoDB</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="I use it for implementing some boolean logic circuits">
                <div className="periodic-element-inner">
                    <div className="title">Vg</div>
                    <div className="description">Verilog HDL</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="Simple and easy to beautify web applications">
                <div className="periodic-element-inner">
                    <div className="title">Cs</div>
                    <div className="description">CSS</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="My favorite backend framework.">
                <div className="periodic-element-inner">
                    <div className="title">Nd</div>
                    <div className="description">NodeJS</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="Needs no explanation XD.">
                <div className="periodic-element-inner">
                    <div className="title">Js</div>
                    <div className="description">JavaScript</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Best library for NodeJS" href="https://tellystats.com" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Ex</div>
                    <div className="description">ExpressJS</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="Best language for Object Oriented Programming!">
                <div className="periodic-element-inner">
                    <div className="title">Ja</div>
                    <div className="description">Java</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="The only SQL database I know :(">
                <div className="periodic-element-inner">
                    <div className="title">Ms</div>
                    <div className="description">MySQL</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Started learning it. Found it amazing!">
                <div className="periodic-element-inner">
                    <div className="title">Ft</div>
                    <div className="description">Flutter</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="I design all my Android apps using this lovely framework" href="https://blog.toggl.com" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Ad</div>
                    <div className="description">Android</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Handy tool for web development">
                <div className="periodic-element-inner">
                    <div className="title">Wp</div>
                    <div className="description">Webpack</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Not really a skill, but I'm quite good at DotA 2" href="https://docs.google.com/spreadsheets/d/1Dim2nKRjgpkjA4miqTzcLPT68L0B5LU2aWZWF5hHYAc/edit#gid=0" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Dt</div>
                    <div className="description">DotA 2</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Another very handy tool for web development">
                <div className="periodic-element-inner">
                    <div className="title">Bb</div>
                    <div className="description">Babel</div>
                </div>
            </div>

        
    
            </div>


            <div className="legend-table">
                <div className="legend-table__wrapper"><span className="legend-table__marker social-media"></span><span className="legend-table__text">Programming Languages</span><span className="legend-table__marker intense-work"></span><span className="legend-table__text">Frameworks</span><span className="legend-table__marker just-trying"></span>
                    <span
                        className="legend-table__text">Software Packages</span><span className="legend-table__marker fun-stuff"></span><span className="legend-table__text">Misc.</span><br/>
                </div>
            </div>
        </div>
    )
}

export default SkillsTable;