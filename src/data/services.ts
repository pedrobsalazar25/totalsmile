import boneGrafting from "@/assets/services/bone-grafting.webp";
import cosmeticDentistry from "@/assets/services/cosmetic-dentistry.webp";
import dentalImplants from "@/assets/services/dental-implants.webp";
import dentures from "@/assets/services/dentures.webp";
import endodontic from "@/assets/services/endodontic-procedures.webp";
import oralSurgery from "@/assets/services/oral-surgery.webp";
import restorative from "@/assets/services/restorative-dentistry.webp";
import sedation from "@/assets/services/sedation-dentistry.webp";
import specialty from "@/assets/services/specialty-procedures.webp";
import wisdom from "@/assets/services/wisdom-teeth.webp";

export type ServiceSubsection = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  subheadline: string;
  image: string;
  whatTitle: string;
  whatParagraphs: string[];
  benefits: { title: string; description: string }[];
  candidates: string[];
  process?: { title: string; description: string }[];
  subsections?: ServiceSubsection[];
  related: string[]; // slugs
};

export const services: Service[] = [
  {
    slug: "bone-grafting",
    title: "Bone Grafting",
    subheadline:
      "Restoring jawbone density for a strong foundation for dental implants and long-lasting results.",
    image: boneGrafting,
    whatTitle: "What is Bone Grafting?",
    whatParagraphs: [
      "Bone grafting is a surgical procedure that rebuilds or restores bone tissue in the jaw. It's commonly performed before dental implant placement when a patient's jawbone has deteriorated due to tooth loss, periodontal disease, or injury.",
      "The procedure uses natural or synthetic bone material to encourage new bone growth, creating a stable foundation for implants and helping preserve the natural contours of your face.",
    ],
    benefits: [
      { title: "Stable Implant Foundation", description: "Creates a strong base so dental implants can integrate and last for decades." },
      { title: "Prevents Bone Loss", description: "Stops further deterioration of the jawbone after tooth extraction." },
      { title: "Expands Eligibility", description: "Enables patients previously not candidates for implants to receive them." },
      { title: "Natural Regeneration", description: "Promotes your body's own bone regrowth over time for lasting results." },
    ],
    candidates: [
      "Patients with insufficient jawbone density for implants",
      "Those who have experienced bone loss from periodontal disease",
      "Patients needing tooth replacement who lack adequate bone structure",
      "People told they need bone reconstruction before getting implants",
    ],
    related: ["dental-implants", "oral-surgery", "restorative-dentistry"],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    subheadline:
      "Transform your smile with porcelain veneers, teeth whitening, and smile makeovers designed for natural beauty.",
    image: cosmeticDentistry,
    whatTitle: "What is Cosmetic Dentistry?",
    whatParagraphs: [
      "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. From professional teeth whitening to porcelain veneers and complete smile makeovers, our specialists create beautiful, natural-looking results that boost confidence and transform your look.",
      "We combine artistry with advanced dental technology to give you the smile you've always wanted — without sacrificing the health of your natural teeth.",
    ],
    benefits: [
      { title: "Custom Smile Design", description: "Each smile is designed to look natural and complement your features." },
      { title: "Porcelain Veneers", description: "Stain-resistant veneers that last for years with proper care." },
      { title: "Professional Whitening", description: "Dramatic yet safe results in a fraction of the time of at-home kits." },
      { title: "Full Makeovers", description: "Combine multiple treatments for a complete smile transformation." },
    ],
    candidates: [
      "Patients with stained, discolored, or yellowed teeth",
      "Those with chipped, cracked, or worn teeth",
      "People with gaps or spacing issues between teeth",
      "Anyone seeking a complete smile transformation",
    ],
    related: ["restorative-dentistry", "dental-implants", "specialty-procedures"],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    subheadline:
      "Permanent tooth replacement that looks, feels, and functions like natural teeth — with significant savings.",
    image: dentalImplants,
    whatTitle: "What are Dental Implants?",
    whatParagraphs: [
      "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once the implant integrates with the bone (a process called osseointegration), a custom-made crown, bridge, or denture is attached to restore full function and aesthetics.",
      "Dental implants are the gold standard for tooth replacement because they preserve jawbone health, prevent adjacent teeth from shifting, and can last a lifetime with proper care.",
    ],
    benefits: [
      { title: "Permanent & Stable", description: "Functions like a natural tooth — eat, speak, and smile with confidence." },
      { title: "Preserves Jawbone", description: "Stimulates bone growth and prevents the bone loss caused by missing teeth." },
      { title: "Protects Healthy Teeth", description: "No need to grind down or alter adjacent teeth as with bridges." },
      { title: "Lifetime Investment", description: "With proper hygiene, implants can last a lifetime." },
    ],
    candidates: [
      "Adults missing one or more teeth",
      "Patients with sufficient jawbone density (or those who can receive bone grafting)",
      "Those seeking a permanent alternative to bridges or dentures",
      "Non-smokers or those willing to quit during the healing process",
    ],
    subsections: [
      {
        title: "All-on-4®",
        description:
          "A full-arch restoration supported by just 4 strategically placed implants. Ideal for patients missing all teeth in an arch — a permanent, non-removable solution with a faster healing time. The implants are angled to maximize bone contact, often eliminating the need for bone grafting.",
      },
      {
        title: "All-on-5®",
        description:
          "Similar to All-on-4 but with 5 implants for added stability. The extra implant provides greater distribution of bite force, suitable for patients with higher bite requirements or softer bone density.",
      },
      {
        title: "All-on-6®",
        description:
          "A full-arch prosthesis supported by 6 implants, offering maximum stability and load distribution. Ideal for patients with good bone density who want the most secure, long-lasting full-arch solution.",
      },
      {
        title: "All-on-8®",
        description:
          "The most comprehensive full-arch solution, using 8 implants for ultimate strength and durability. Best suited for patients with excellent bone quality who want the most secure prosthetic possible.",
      },
    ],
    related: ["bone-grafting", "cosmetic-dentistry", "restorative-dentistry"],
  },
  {
    slug: "dentures",
    title: "Dentures",
    subheadline:
      "Custom-fitted full and partial dentures that restore function, comfort, and confidence.",
    image: dentures,
    whatTitle: "What are Dentures?",
    whatParagraphs: [
      "Dentures are removable prosthetic devices designed to replace missing teeth and restore the appearance and function of your smile. Our custom-fitted dentures are crafted from high-quality materials to look natural, fit comfortably, and let you eat, speak, and smile with confidence.",
      "We offer both full dentures (for patients missing all teeth in an arch) and partial dentures (for those missing several teeth), as well as implant-supported options for added stability.",
    ],
    benefits: [
      { title: "Natural Appearance", description: "Custom-crafted to look like real teeth and fit comfortably." },
      { title: "Premium Materials", description: "Multiple options including premium acrylics and flexible bases." },
      { title: "Implant-Supported Options", description: "Anchor your dentures with implants for unmatched stability." },
      { title: "Affordable Restoration", description: "An accessible tooth-replacement option with flexible payment plans." },
    ],
    candidates: [
      "Patients missing all teeth in one or both arches",
      "Those missing several teeth but not candidates for bridges or implants",
      "Patients seeking an affordable, non-surgical tooth replacement option",
      "Anyone looking for a removable solution that can be taken out for cleaning",
    ],
    related: ["dental-implants", "restorative-dentistry", "oral-surgery"],
  },
  {
    slug: "endodontic-procedures",
    title: "Endodontic Procedures",
    subheadline:
      "Root canal treatment and other endodontic procedures performed by specialists using advanced technology for painless, effective results.",
    image: endodontic,
    whatTitle: "What are Endodontic Procedures?",
    whatParagraphs: [
      "Endodontic procedures treat the inside of the tooth, most commonly through root canal treatment. When the pulp inside a tooth becomes infected or inflamed due to deep decay, cracks, or trauma, a root canal removes the infected tissue, cleans the canal, and seals it to prevent further infection.",
      "Our specialists use advanced rotary instruments and digital imaging to perform root canals with precision and minimal discomfort — saving your natural tooth.",
    ],
    benefits: [
      { title: "Save Your Tooth", description: "Preserve your natural tooth rather than extracting it." },
      { title: "Specialist Care", description: "Performed by endodontic specialists with advanced training." },
      { title: "Modern Technology", description: "Faster, more comfortable treatment with digital tools." },
      { title: "Comfortable Sedation", description: "Gentle anesthesia and sedation options available." },
    ],
    candidates: [
      "Patients experiencing tooth pain, sensitivity to hot or cold, or swelling",
      "Those with deep decay or a cracked tooth",
      "Patients whose dentist has recommended root canal treatment",
      "Anyone seeking to save a tooth rather than have it extracted",
    ],
    related: ["restorative-dentistry", "sedation-dentistry", "oral-surgery"],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    subheadline:
      "From extractions to complex jaw surgery, our board-certified oral surgeons provide expert care with patient comfort as the priority.",
    image: oralSurgery,
    whatTitle: "What is Oral Surgery?",
    whatParagraphs: [
      "Oral surgery encompasses a range of surgical procedures involving the mouth, jaw, and facial structures. Our board-certified oral surgeons perform extractions, jaw realignment, treatment of oral pathologies, and more — always with a focus on patient comfort and optimal outcomes.",
      "We use advanced anesthesia and sedation techniques to ensure procedures are as comfortable as possible, with state-of-the-art surgical suites for the safest experience.",
    ],
    benefits: [
      { title: "Board-Certified Surgeons", description: "Extensive experience handling routine and complex cases." },
      { title: "Comprehensive Services", description: "Full range of oral surgical procedures under one roof." },
      { title: "Sedation Options", description: "Multiple sedation choices for anxious patients." },
      { title: "Advanced Facilities", description: "State-of-the-art surgical suites and equipment." },
    ],
    candidates: [
      "Patients needing tooth extractions (including impacted teeth)",
      "Those requiring jaw surgery or realignment",
      "Patients with oral cysts, tumors, or other pathology",
      "Anyone referred for oral surgical procedures by their dentist",
    ],
    related: ["wisdom-teeth", "bone-grafting", "sedation-dentistry"],
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    subheadline:
      "Crowns, bridges, inlays, and onlays that restore damaged teeth to their natural function and appearance.",
    image: restorative,
    whatTitle: "What is Restorative Dentistry?",
    whatParagraphs: [
      "Restorative dentistry focuses on repairing or replacing damaged, decayed, or missing teeth to restore both function and appearance. Using materials like porcelain, zirconia, and composite resin, our specialists create crowns, bridges, inlays, and onlays that blend seamlessly with your natural teeth.",
      "We prioritize treatments that preserve as much of your natural tooth structure as possible while delivering durable, long-lasting results.",
    ],
    benefits: [
      { title: "Natural-Looking Results", description: "Restorations that match your existing teeth perfectly." },
      { title: "Durable Materials", description: "Designed to withstand normal biting and chewing for years." },
      { title: "Precision Fit", description: "Digital imaging and CAD/CAM technology ensure a perfect fit." },
      { title: "Conservative Approach", description: "Preserves healthy tooth structure whenever possible." },
    ],
    candidates: [
      "Patients with cracked, worn, or damaged teeth",
      "Those with large fillings that need replacement",
      "People missing one or more teeth (bridges)",
      "Anyone seeking to restore the function and appearance of damaged teeth",
    ],
    related: ["cosmetic-dentistry", "dental-implants", "endodontic-procedures"],
  },
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    subheadline:
      "Relax through your dental procedure with safe, supervised sedation options for anxious patients.",
    image: sedation,
    whatTitle: "What is Sedation Dentistry?",
    whatParagraphs: [
      "Sedation dentistry uses medication to help anxious or fearful patients relax during dental procedures. From mild sedatives for light anxiety to deep sedation for complex procedures, our team tailors sedation levels to each patient's needs.",
      "Our board-certified anesthesiologists and trained staff monitor every patient throughout their procedure to ensure safety and comfort at every moment.",
    ],
    benefits: [
      { title: "Multiple Sedation Levels", description: "From mild relaxation to deep sleep, tailored to your needs." },
      { title: "Board-Certified Safety", description: "Anesthesiologists oversee every sedation case." },
      { title: "No Memory of Procedure", description: "Many patients wake up surprised it's already over." },
      { title: "Anxiety-Free Care", description: "Makes complex procedures possible for highly anxious patients." },
    ],
    candidates: [
      "Patients with dental anxiety or fear of the dentist",
      "Those with a sensitive gag reflex",
      "People undergoing long or complex procedures",
      "Patients who have had traumatic dental experiences in the past",
    ],
    related: ["oral-surgery", "wisdom-teeth", "endodontic-procedures"],
  },
  {
    slug: "specialty-procedures",
    title: "Specialty Procedures",
    subheadline:
      "Advanced dental procedures performed by specialists with expertise in complex cases and unique treatment needs.",
    image: specialty,
    whatTitle: "What are Specialty Procedures?",
    whatParagraphs: [
      "Specialty procedures cover advanced or complex dental treatments that fall outside routine restorative and cosmetic work. This may include treatments for patients with special needs, complex full-mouth rehabilitations, pre-cancer lesion removal, and other specialized interventions.",
      "Our team of board-certified specialists has the training and experience to handle even the most complex cases, coordinating multidisciplinary care for the best outcomes.",
    ],
    benefits: [
      { title: "Specialist Expertise", description: "Board-certified specialists trained in complex cases." },
      { title: "Comprehensive Planning", description: "Multi-phase treatment plans coordinated end-to-end." },
      { title: "Multidisciplinary Care", description: "Seamless coordination between multiple specialists." },
      { title: "Advanced Facilities", description: "State-of-the-art equipment for advanced procedures." },
    ],
    candidates: [
      "Patients with complex dental needs requiring multiple specialists",
      "Those with special healthcare needs requiring adapted care",
      "Patients with advanced periodontal disease",
      "Anyone seeking comprehensive full-mouth rehabilitation",
    ],
    related: ["dental-implants", "oral-surgery", "restorative-dentistry"],
  },
  {
    slug: "wisdom-teeth",
    title: "Wisdom Teeth",
    subheadline:
      "Safe, comfortable wisdom tooth extraction by experienced oral surgeons in our state-of-the-art surgical facility.",
    image: wisdom,
    whatTitle: "What is Wisdom Teeth Removal?",
    whatParagraphs: [
      "Wisdom teeth, or third molars, typically emerge in the late teens or early twenties. When they become impacted (unable to fully emerge), grow at an angle, or cause crowding, extraction is recommended.",
      "Our oral surgeons perform wisdom tooth extractions using advanced techniques and sedation options to ensure a comfortable experience with minimal recovery time.",
    ],
    benefits: [
      { title: "Experienced Surgeons", description: "Extensive experience with complex and impacted extractions." },
      { title: "Digital Imaging", description: "Precise assessment of root development and positioning." },
      { title: "Sedation Comfort", description: "Multiple sedation options for a stress-free procedure." },
      { title: "Smooth Recovery", description: "Detailed post-op care and follow-up for fast healing." },
    ],
    candidates: [
      "Teenagers or young adults whose wisdom teeth are emerging",
      "Patients with impacted or partially erupted wisdom teeth",
      "Those experiencing pain, swelling, or infection related to wisdom teeth",
      "Anyone whose dentist has recommended wisdom tooth extraction",
    ],
    related: ["oral-surgery", "sedation-dentistry", "bone-grafting"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
