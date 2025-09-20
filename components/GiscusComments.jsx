'use client'
import Giscus from "@giscus/react";
export default function GiscusComments(){
  return (<Giscus repo="YOUR_GITHUB_USER/YOUR_REPO" repoId="REPO_ID" category="General" categoryId="CATEGORY_ID" mapping="pathname" reactionsEnabled="1" emitMetadata="0" inputPosition="bottom" theme="preferred_color_scheme" lang="en" loading="lazy"/>);
}
