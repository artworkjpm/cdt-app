interface Props {
	tableHeaders: string[];
	data: any[];
}

export default function DataTable({ tableHeaders, data }: Props) {
	console.log(tableHeaders, data);

	return (
		<div>
			<table>
				<thead>
					<tr>
						{tableHeaders.map((item, index) => {
							return <th key={index}>{item}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return (
							<tr key={index}>
								{tableHeaders.map((el, i) => {
									return <td>{item[el.toLowerCase()]}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
