interface MarkBookTypes {
	id?:string,
	type: string;
	lang?: string | null;
	text?: string;
	src?: string;
	name?: string;
	size?: number;
}
function spliter(txt:string,separator:string|RegExp,max:number) {
  const result = txt.split(separator)

  return [...result.slice(0,max),result.slice(max).join("")]
}
interface Rules {
	pattern: RegExp;
	onPattern(result: RegExpExecArray, restOfTheText: string): MarkBookTypes;
}
const rules: Array<Rules> = [
	{
		pattern: /\[([a-zA-Z]+)\]\s+/,
		onPattern(res: RegExpExecArray, rest: string) {
			return { type: `CITA`, name: res[1], text: rest };
		}
	},
	{
		pattern: /!\[([a-zA-Z]+)\]\s+/,
		onPattern(res: RegExpExecArray, rest: string) {
			return { type: `CITA_INLINE`, name: res[1], text: rest };
		}
	},
	{
		pattern: /T([0-9]):\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `TITLE`, size: parseInt(res[1]), text ,id:crypto.randomUUID()};
		}
	},
	{
		pattern: /Img:\s+/,
		onPattern(res: RegExpExecArray, src: string) {
			return { type: `IMAGE`, src };
		}
	},
	{
		pattern: /P:\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `PARAGRAPH`, text };
		}
	},
	{
		pattern: /GitHub:\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `GITHUB_CARD`, text };
		}
	},
	{
		pattern: /\$\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `TERMINAL`, text };
		}
	},
	{
		pattern: /Code:([a-zA-Z]*)\s/,
		onPattern(res: RegExpExecArray, text: string) {
			const resalt:string[] = [];
			const [fileName, ...codeL] = text.split('\n');
			const code = codeL.map((line)=>{
				const sepa = spliter(line,"",2);
				console.log(sepa)
				resalt.push(sepa[1] )
				return sepa[2] 
			})

			return { type: `CODE`,fileName, lang: res[1], text: code.join("\n") , resalt};
		}
	}
];

export function parserMDX(markBook: string):{items:MarkBookTypes[]} {
	const groupIndent: string[] = markBook
		.trim()
		.split(/\n(?=[^\s\t])/)
		.filter((m) => m !== '')
		.map((m) => m.trimEnd());

	const fg = groupIndent.map((text: string): MarkBookTypes | null => {
		for (const { pattern, onPattern } of rules) {
			const reg = new RegExp(pattern, 'dy');
			const result = reg.exec(text);
			if (result) {
				return onPattern(result, text.slice(result[0].length));
			}
		}
		return null;
	});
	return {items:fg.filter((m): m is MarkBookTypes => m !== null)};
}
