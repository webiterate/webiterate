/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  ExperimentPageWrapper,
  Topic,
  Title,
  Tagline,
  Subtitle,
  Content,
  Link,
} from './blogPost-styles';
// import { FormattedMessage } from 'react-intl';
// import messages from '../messages';

export function BlogPost() {
  const codeStrings = {
    resumeAction: {
      lang: 'yaml',
      value: `
        name: Process LaTeX document

        # This workflow is triggered on pushes to the repository.
        on: [push]

        jobs:
          build_latex:
            # This job runs on Linux
            runs-on: ubuntu-latest
            steps:
              - name: Set up Git repository
                uses: actions/checkout@v2
              - name: Compile LaTeX document
                uses: xu-cheng/latex-action@v2
                with:
                  root_file: main.tex
                  args: -lualatex --file-line-error --interaction=nonstopmode --output-format=pdf --output-directory=latex_project
              - name: Sync PDF document
                uses: appleboy/gh-pages-action@v0.0.2
                with:
                  username: \${{ secrets.USERNAME }}
                  password: \${{ secrets.PASSWORD }}
                  remote_url: \${{ secrets.REMOTE_URL }}
                  pages_directory: latex_project
                  target_branch: master
                  target_directory: output
                  commit_author: gh-pages-action
        `,
    },
  };
  return (
    <ExperimentPageWrapper>
      <Topic>GitPortfolio | Automate Your Professional Portfolio</Topic>
      <Title>Introduction</Title>
      <Tagline>Github for Job Seekers</Tagline>

      <Content>
        Primary aim is to help job-seeking technology workers effectively manage
        their professional portfolios on Github. Secondary aims are:
      </Content>
      <ul>
        <li>
          <span>
            {"To serve as base content for Webiterate's first experiment"}
          </span>
        </li>
        <li>
          <span>
            {"To help introduce readers to Github's various platform tools"}
          </span>
        </li>
        <li>
          <span>
            To develop engaged community of like-minded and similarly situated
            individuals
          </span>
        </li>
        <li>
          <span>To increase my professional visibility</span>
        </li>
      </ul>

      <Title>Background</Title>
      <Tagline>
        We automate much of our work, can we do the same for our
        <span>body</span> of work?
      </Tagline>

      <Content>
        We are in dramatically tenuous times. It is difficult to process and
        manage the demands of job-seeking while also navigating personal
        stressors exacerbated by the pandemic. Recruitment has by-and-large,
        ground to a near halt, networking platforms like LinkedIn are uniquely
        geared towards itemizing our work. Collaborative software development
        platforms like Github are conversely tooled to store our work. Currently
        siloed, this blog post serves to both question and hopefully bridge
        these sibling worlds for the benefit of job-seeking technology workers.
      </Content>
      <Content>
        In this section {"we'll"} review the underpinning technologies that will
        be used to build GitPortfolio. It should be noted that while the tools
        explored in this post detail Github-specific offerings, the same can be
        achieved with alternative platforms (e.g.{' '}
        <Link href="https://www.netlifycms.org/">NetlifyCMS</Link> +{' '}
        <Link href="https://circleci.com/">CircleCI</Link> +{' '}
        <Link href="https://nodejs.org/en/about/">Scripting</Link>. This article
        is largely focussed on solution speed and sacrificed exploration for
        exploitation to minimise lead-time.
      </Content>

      <Subtitle>Github Pages</Subtitle>

      <Content>
        <Link href="https://pages.github.com/">Github Pages</Link> is a static
        site hosting service that allows for the building and publishing of{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          HTML
        </Link>
        ,{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Glossary/CSS">
          CSS
        </Link>{' '}
        and{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Glossary/JavaScript">
          JavaScript
        </Link>{' '}
        files from a{' '}
        <Link href="https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/">
          Github
        </Link>{' '}
        repository. It offers quick, reliable and consistent website publishing
        and lowers the barrier to entry for development of the same. For an
        in-depth and digestible overview of the same please take this quick{' '}
        <Link href="https://lab.github.com/githubtraining/github-pages">
          GitHub Pages course
        </Link>{' '}
        on {"Github's"} Learning Lab.
      </Content>

      <Subtitle>Github Webhooks</Subtitle>

      <Content>
        <Link href="https://developer.github.com/webhooks/">
          Github Webhooks
        </Link>{' '}
        are a HTTP-based, event subscription mechanism offered by Github to
        developers who might want to integrate with {"Github's"} platform.
        Developer integration tasks might include performing{' '}
        <Link href="https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth">
          OAuth
        </Link>{' '}
        or alerting an application to the state of a repository. Ever signed in
        or registered to an online service through your social media platform of
        choice? Those are webhooks in action.
      </Content>

      <Subtitle>Github Actions</Subtitle>

      <Content>
        <Link href="https://github.com/features/actions">Github Actions</Link>{' '}
        are an approach to creating{' '}
        <Link href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment">
          Continuous Integration / Continuous Delivery
        </Link>{' '}
        pipelines on Github. These pipelines/workflows allow developers to
        quickly integrate and deploy their developed code to end-users.
      </Content>

      <Subtitle>Github Templates</Subtitle>

      <Content>
        <Link href="https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/">
          Github Templates
        </Link>{' '}
        are a quick and robust way of sharing repetitive code across
        repositories. It allows users to share entire files and folders between
        different projects that rely on the same content and structure,
        circumventing time overheads involved in setting up projects.
      </Content>

      <Title>Design</Title>
      <Tagline>Can we git our jobs?</Tagline>

      <Content>
        While Networking platforms require you to manually update your profiles
        with content, dynamical platforms like Github conversely track and
        follow you throughout your professional career (at least if you work
        with software, but this too is shifting). We will aim to use the latter
        to track, manage and showcase professional online portfolios. To develop
        our proof of concept, we envision utilising the following tools and
        processes:
      </Content>
      <ul>
        <li>
          <span>
            Use Github pages to create and host static portfolio pages
          </span>
        </li>
        <li>
          <span>
            Use Github webhooks and actions that will build updated portfolio
            versions
          </span>
        </li>
        <li>
          <span>
            Use Github repository templates to share proof of concept with wider
            community
          </span>
        </li>
      </ul>

      <iframe
        style={{ border: 'none' }}
        width="100%"
        height="450"
        title="gitportfolio-design"
        src="https://whimsical.com/embed/FHLAa1Xru9b97qVR75MBqY#2Ux7TurymMrx1skZe73J"
      />

      <Title>Implementation</Title>

      <Content>
        A number of Github Action Workflows were developed to prototype
        GitPortfolio and will be reviewed below.
      </Content>

      <Subtitle>Github Resume Workflow</Subtitle>

      <SyntaxHighlighter
        language={codeStrings.resumeAction.lang}
        style={shadesOfPurple}
      >
        {codeStrings.resumeAction.value}
      </SyntaxHighlighter>
    </ExperimentPageWrapper>
  );
}

export default compose(memo)(BlogPost);
