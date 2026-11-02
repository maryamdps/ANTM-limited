import { Factory, Container, ClipboardCheck } from 'lucide-react';

export function Operations() {
	return (
		<section className="operations section-rail" id="approach">
			<div className="operations-title">
				<span className="eyebrow">OUR OPERATIONAL APPROACH</span>
				<h2>
					Your legal and quality<br />
					<em>guardian at the point of origin.</em>
				</h2>
				<p>
					ANTM Hong Kong Limited operates as the buyer's physical legal and quality representative directly at the point of origin in Asia. We do not broker from a distance — we are present on the factory floor, at the consolidation hub, and at the port of loading, assuming direct custody of specification integrity, regulatory compliance, and shipment release on the buyer's behalf.
				</p>
				<a className="text-link" href="#inquiry">Commission a sourcing brief ↗</a>
			</div>
			<div className="operation-list">
				<article>
					<Factory />
					<div>
						<span>01 / DIRECT FACTORY-FLOOR AUDITS</span>
						<h3>Verified capacity, with middlemen removed</h3>
						<p>
							We conduct on-site audits of manufacturing capability, production lines, and quality systems against the buyer's specification — verifying stated capacities, lead times, and material provenance rather than accepting supplier declarations. By engaging production directly and eliminating hidden intermediary layers, we establish a single accountable chain from the buyer's brief to the factory floor.
						</p>
					</div>
				</article>
				<article>
					<Container />
					<div>
						<span>02 / MULTI-COMMODITY FCL FREIGHT CONSOLIDATION</span>
						<h3>Disjointed product lines, one optimized container</h3>
						<p>
							At our central shipping hub, disjointed product lines — furniture, plastics, electronics, and footwear — are consolidated into single full-container-load (FCL) shipments. Export packing, load planning, and cargo compatibility are engineered to the buyer's destination port, compressing landed cost and reducing the fragmentation that erodes margin across multi-supplier programmes.
						</p>
					</div>
				</article>
				<article>
					<ClipboardCheck />
					<div>
						<span>03 / PRE-SHIPMENT PORT COMPLIANCE</span>
						<h3>Mandatory testing and document coordination</h3>
						<p>
							Before release, we coordinate mandatory raw material testing and the full document set required by international customs gates — including SGS, Intertek, and COTECNA inspection regimes. Compliance documentation, certificates of analysis, and inspection certificates are reconciled against the contracted specification to guarantee smooth terminal release at the destination port.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}
