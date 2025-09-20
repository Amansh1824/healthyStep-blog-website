import { components as base } from "next-mdx-remote/rsc";
import WorkoutStep from "./mdx/WorkoutStep";
import InfoNote from "./mdx/InfoNote";
import MacroTable from "./mdx/MacroTable";
import CtaBox from "./mdx/CtaBox";
import CompareTable from "./mdx/CompareTable";
const components = { ...base, WorkoutStep, InfoNote, MacroTable, CtaBox, CompareTable };
export default components;
