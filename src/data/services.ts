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
import type { Lang } from "@/i18n/translations";

export type ServiceSubsection = {
  title: string;
  description: string;
};

export type ServiceContent = {
  title: string;
  subheadline: string;
  whatTitle: string;
  whatParagraphs: string[];
  benefits: { title: string; description: string }[];
  candidates: string[];
  subsections?: ServiceSubsection[];
};

export type Service = {
  slug: string;
  image: string;
  related: string[]; // slugs
  i18n: Record<Lang, ServiceContent>;
};

export const services: Service[] = [
  {
    slug: "bone-grafting",
    image: boneGrafting,
    related: ["dental-implants", "oral-surgery", "restorative-dentistry"],
    i18n: {
      en: {
        title: "Bone Grafting",
        subheadline:
          "Restoring jawbone density for a strong foundation for dental implants and long-lasting results.",
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
      },
      es: {
        title: "Injerto Óseo",
        subheadline:
          "Restauramos la densidad del hueso maxilar para crear una base sólida para implantes dentales y resultados duraderos.",
        whatTitle: "¿Qué es un Injerto Óseo?",
        whatParagraphs: [
          "El injerto óseo es un procedimiento quirúrgico que reconstruye o restaura el tejido óseo en la mandíbula. Suele realizarse antes de colocar implantes dentales cuando el hueso maxilar se ha deteriorado por pérdida de dientes, enfermedad periodontal o lesiones.",
          "El procedimiento utiliza material óseo natural o sintético para estimular el crecimiento de hueso nuevo, creando una base estable para los implantes y ayudando a preservar los contornos naturales de tu rostro.",
        ],
        benefits: [
          { title: "Base Estable para Implantes", description: "Crea una base sólida para que los implantes se integren y duren décadas." },
          { title: "Previene la Pérdida Ósea", description: "Detiene el deterioro del hueso maxilar tras una extracción dental." },
          { title: "Amplía la Elegibilidad", description: "Permite que pacientes que antes no eran candidatos puedan recibir implantes." },
          { title: "Regeneración Natural", description: "Estimula el crecimiento del propio hueso para resultados duraderos." },
        ],
        candidates: [
          "Pacientes con densidad ósea insuficiente para implantes",
          "Personas con pérdida ósea por enfermedad periodontal",
          "Pacientes que necesitan reemplazo dental sin estructura ósea adecuada",
          "Personas a quienes les han dicho que necesitan reconstrucción ósea antes de los implantes",
        ],
      },
    },
  },
  {
    slug: "cosmetic-dentistry",
    image: cosmeticDentistry,
    related: ["restorative-dentistry", "dental-implants", "specialty-procedures"],
    i18n: {
      en: {
        title: "Cosmetic Dentistry",
        subheadline:
          "Transform your smile with porcelain veneers, teeth whitening, and smile makeovers designed for natural beauty.",
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
      },
      es: {
        title: "Odontología Cosmética",
        subheadline:
          "Transforma tu sonrisa con carillas de porcelana, blanqueamiento y diseños de sonrisa pensados para una belleza natural.",
        whatTitle: "¿Qué es la Odontología Cosmética?",
        whatParagraphs: [
          "La odontología cosmética se enfoca en mejorar la apariencia de tus dientes, encías y sonrisa en general. Desde blanqueamiento profesional hasta carillas de porcelana y diseños completos de sonrisa, nuestros especialistas crean resultados naturales que elevan tu confianza y transforman tu imagen.",
          "Combinamos arte y tecnología dental avanzada para darte la sonrisa que siempre quisiste, sin sacrificar la salud de tus dientes naturales.",
        ],
        benefits: [
          { title: "Diseño de Sonrisa Personalizado", description: "Cada sonrisa se diseña para verse natural y armonizar con tus rasgos." },
          { title: "Carillas de Porcelana", description: "Resistentes a las manchas y duraderas con el cuidado adecuado." },
          { title: "Blanqueamiento Profesional", description: "Resultados dramáticos y seguros en mucho menos tiempo que los kits caseros." },
          { title: "Diseños Integrales", description: "Combina varios tratamientos para una transformación completa." },
        ],
        candidates: [
          "Pacientes con dientes manchados, decolorados o amarillentos",
          "Personas con dientes astillados, agrietados o desgastados",
          "Pacientes con espacios o separación entre dientes",
          "Cualquiera que busque una transformación completa de su sonrisa",
        ],
      },
    },
  },
  {
    slug: "dental-implants",
    image: dentalImplants,
    related: ["bone-grafting", "cosmetic-dentistry", "restorative-dentistry"],
    i18n: {
      en: {
        title: "Dental Implants",
        subheadline:
          "Permanent tooth replacement that looks, feels, and functions like natural teeth — with significant savings.",
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
          { title: "All-on-4®", description: "A full-arch restoration supported by just 4 strategically placed implants. Ideal for patients missing all teeth in an arch — a permanent, non-removable solution with a faster healing time. The implants are angled to maximize bone contact, often eliminating the need for bone grafting." },
          { title: "All-on-5®", description: "Similar to All-on-4 but with 5 implants for added stability. The extra implant provides greater distribution of bite force, suitable for patients with higher bite requirements or softer bone density." },
          { title: "All-on-6®", description: "A full-arch prosthesis supported by 6 implants, offering maximum stability and load distribution. Ideal for patients with good bone density who want the most secure, long-lasting full-arch solution." },
          { title: "All-on-8®", description: "The most comprehensive full-arch solution, using 8 implants for ultimate strength and durability. Best suited for patients with excellent bone quality who want the most secure prosthetic possible." },
        ],
      },
      es: {
        title: "Implantes Dentales",
        subheadline:
          "Reemplazo dental permanente que se ve, se siente y funciona como un diente natural — con un ahorro significativo.",
        whatTitle: "¿Qué son los Implantes Dentales?",
        whatParagraphs: [
          "Los implantes dentales son postes de titanio que se colocan quirúrgicamente en el hueso maxilar para actuar como raíces artificiales. Una vez que el implante se integra con el hueso (un proceso llamado oseointegración), se coloca una corona, puente o dentadura hecha a la medida para restaurar la función y la estética.",
          "Los implantes son el estándar de oro para el reemplazo dental porque preservan la salud del hueso maxilar, evitan que los dientes vecinos se desplacen y pueden durar toda la vida con el cuidado adecuado.",
        ],
        benefits: [
          { title: "Permanentes y Estables", description: "Funcionan como un diente natural — come, habla y sonríe con confianza." },
          { title: "Preservan el Hueso Maxilar", description: "Estimulan el crecimiento óseo y previenen la pérdida causada por dientes faltantes." },
          { title: "Protegen los Dientes Sanos", description: "No requieren tallar ni alterar los dientes vecinos como sí lo hacen los puentes." },
          { title: "Inversión de por Vida", description: "Con buena higiene, los implantes pueden durar toda la vida." },
        ],
        candidates: [
          "Adultos a los que les falta uno o más dientes",
          "Pacientes con suficiente densidad ósea (o que puedan recibir injerto óseo)",
          "Personas que buscan una alternativa permanente a puentes o dentaduras",
          "No fumadores o quienes estén dispuestos a dejar de fumar durante la cicatrización",
        ],
        subsections: [
          { title: "All-on-4®", description: "Restauración de arcada completa con solo 4 implantes colocados estratégicamente. Ideal para pacientes sin dientes en una arcada — una solución permanente y fija con un tiempo de cicatrización más rápido. Los implantes se inclinan para maximizar el contacto óseo, evitando muchas veces el injerto óseo." },
          { title: "All-on-5®", description: "Similar a All-on-4 pero con 5 implantes para mayor estabilidad. El implante extra ofrece una mejor distribución de la fuerza de mordida, ideal para pacientes con mayores exigencias o densidad ósea más baja." },
          { title: "All-on-6®", description: "Prótesis de arcada completa soportada por 6 implantes, ofreciendo máxima estabilidad y distribución de carga. Ideal para pacientes con buena densidad ósea que buscan la solución fija más segura y duradera." },
          { title: "All-on-8®", description: "La solución de arcada completa más completa, con 8 implantes para máxima fuerza y durabilidad. Recomendada para pacientes con excelente calidad ósea que buscan la prótesis más firme posible." },
        ],
      },
    },
  },
  {
    slug: "dentures",
    image: dentures,
    related: ["dental-implants", "restorative-dentistry", "oral-surgery"],
    i18n: {
      en: {
        title: "Dentures",
        subheadline:
          "Custom-fitted full and partial dentures that restore function, comfort, and confidence.",
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
      },
      es: {
        title: "Dentaduras",
        subheadline:
          "Dentaduras completas y parciales hechas a la medida que restauran función, comodidad y confianza.",
        whatTitle: "¿Qué son las Dentaduras?",
        whatParagraphs: [
          "Las dentaduras son prótesis removibles diseñadas para reemplazar dientes faltantes y devolverle a tu sonrisa su apariencia y función. Nuestras dentaduras se fabrican a la medida con materiales de alta calidad para verse naturales, ajustar con comodidad y permitirte comer, hablar y sonreír con confianza.",
          "Ofrecemos dentaduras completas (para pacientes sin dientes en una arcada) y parciales (para quienes les faltan varios dientes), además de opciones soportadas por implantes para mayor estabilidad.",
        ],
        benefits: [
          { title: "Apariencia Natural", description: "Hechas a la medida para verse como dientes reales y ajustar cómodamente." },
          { title: "Materiales Premium", description: "Múltiples opciones, incluidos acrílicos premium y bases flexibles." },
          { title: "Opciones con Implantes", description: "Ancla tu dentadura con implantes para una estabilidad inigualable." },
          { title: "Restauración Accesible", description: "Una opción asequible con planes de pago flexibles." },
        ],
        candidates: [
          "Pacientes sin dientes en una o ambas arcadas",
          "Personas a las que les faltan varios dientes pero no son candidatas a puentes o implantes",
          "Pacientes que buscan una opción asequible y no quirúrgica",
          "Cualquiera que prefiera una solución removible para limpieza fácil",
        ],
      },
    },
  },
  {
    slug: "endodontic-procedures",
    image: endodontic,
    related: ["restorative-dentistry", "sedation-dentistry", "oral-surgery"],
    i18n: {
      en: {
        title: "Endodontic Procedures",
        subheadline:
          "Root canal treatment and other endodontic procedures performed by specialists using advanced technology for painless, effective results.",
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
      },
      es: {
        title: "Procedimientos Endodónticos",
        subheadline:
          "Tratamiento de conducto y otros procedimientos endodónticos realizados por especialistas con tecnología avanzada para resultados efectivos y sin dolor.",
        whatTitle: "¿Qué son los Procedimientos Endodónticos?",
        whatParagraphs: [
          "Los procedimientos endodónticos tratan el interior del diente, comúnmente mediante el tratamiento de conducto. Cuando la pulpa dental se infecta o inflama por caries profundas, fracturas o trauma, el tratamiento de conducto remueve el tejido infectado, limpia el canal y lo sella para prevenir nuevas infecciones.",
          "Nuestros especialistas usan instrumentos rotatorios avanzados e imágenes digitales para realizar tratamientos de conducto con precisión y mínimo malestar — salvando tu diente natural.",
        ],
        benefits: [
          { title: "Salva tu Diente", description: "Conserva tu diente natural en lugar de extraerlo." },
          { title: "Atención Especializada", description: "Realizado por endodoncistas con formación avanzada." },
          { title: "Tecnología Moderna", description: "Tratamiento más rápido y cómodo con herramientas digitales." },
          { title: "Sedación Cómoda", description: "Opciones suaves de anestesia y sedación disponibles." },
        ],
        candidates: [
          "Pacientes con dolor dental, sensibilidad al frío o calor, o inflamación",
          "Personas con caries profundas o un diente fracturado",
          "Pacientes a quienes su dentista les ha recomendado tratamiento de conducto",
          "Cualquiera que busque salvar un diente en lugar de extraerlo",
        ],
      },
    },
  },
  {
    slug: "oral-surgery",
    image: oralSurgery,
    related: ["wisdom-teeth", "bone-grafting", "sedation-dentistry"],
    i18n: {
      en: {
        title: "Oral Surgery",
        subheadline:
          "From extractions to complex jaw surgery, our board-certified oral surgeons provide expert care with patient comfort as the priority.",
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
      },
      es: {
        title: "Cirugía Oral",
        subheadline:
          "Desde extracciones hasta cirugías complejas de mandíbula, nuestros cirujanos orales certificados brindan atención experta priorizando tu comodidad.",
        whatTitle: "¿Qué es la Cirugía Oral?",
        whatParagraphs: [
          "La cirugía oral abarca una variedad de procedimientos que involucran la boca, la mandíbula y las estructuras faciales. Nuestros cirujanos orales certificados realizan extracciones, realineación de mandíbula, tratamiento de patologías orales y más — siempre enfocados en la comodidad del paciente y resultados óptimos.",
          "Usamos técnicas avanzadas de anestesia y sedación para que los procedimientos sean lo más cómodos posible, en quirófanos de última generación para una experiencia más segura.",
        ],
        benefits: [
          { title: "Cirujanos Certificados", description: "Amplia experiencia en casos rutinarios y complejos." },
          { title: "Servicios Integrales", description: "Toda la gama de cirugías orales bajo un mismo techo." },
          { title: "Opciones de Sedación", description: "Varias alternativas para pacientes ansiosos." },
          { title: "Instalaciones Avanzadas", description: "Quirófanos y equipo de última generación." },
        ],
        candidates: [
          "Pacientes que necesitan extracciones (incluyendo dientes impactados)",
          "Personas que requieren cirugía o realineación de mandíbula",
          "Pacientes con quistes orales, tumores u otra patología",
          "Cualquiera referido por su dentista para cirugía oral",
        ],
      },
    },
  },
  {
    slug: "restorative-dentistry",
    image: restorative,
    related: ["cosmetic-dentistry", "dental-implants", "endodontic-procedures"],
    i18n: {
      en: {
        title: "Restorative Dentistry",
        subheadline:
          "Crowns, bridges, inlays, and onlays that restore damaged teeth to their natural function and appearance.",
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
      },
      es: {
        title: "Odontología Restauradora",
        subheadline:
          "Coronas, puentes, incrustaciones y onlays que devuelven a los dientes dañados su función y apariencia natural.",
        whatTitle: "¿Qué es la Odontología Restauradora?",
        whatParagraphs: [
          "La odontología restauradora se enfoca en reparar o reemplazar dientes dañados, cariados o ausentes para restaurar tanto la función como la apariencia. Usando materiales como porcelana, zirconio y resina compuesta, nuestros especialistas crean coronas, puentes, incrustaciones y onlays que se integran perfectamente con tus dientes naturales.",
          "Priorizamos tratamientos que preserven la mayor cantidad posible de estructura dental natural, ofreciendo resultados duraderos.",
        ],
        benefits: [
          { title: "Resultados Naturales", description: "Restauraciones que combinan perfectamente con tus dientes existentes." },
          { title: "Materiales Duraderos", description: "Diseñados para soportar la mordida y masticación por años." },
          { title: "Ajuste de Precisión", description: "Imágenes digitales y tecnología CAD/CAM para un ajuste perfecto." },
          { title: "Enfoque Conservador", description: "Preserva la estructura dental sana siempre que es posible." },
        ],
        candidates: [
          "Pacientes con dientes fracturados, desgastados o dañados",
          "Personas con empastes grandes que necesitan reemplazo",
          "Pacientes a los que les faltan uno o más dientes (puentes)",
          "Cualquiera que busque restaurar la función y apariencia de dientes dañados",
        ],
      },
    },
  },
  {
    slug: "sedation-dentistry",
    image: sedation,
    related: ["oral-surgery", "wisdom-teeth", "endodontic-procedures"],
    i18n: {
      en: {
        title: "Sedation Dentistry",
        subheadline:
          "Relax through your dental procedure with safe, supervised sedation options for anxious patients.",
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
      },
      es: {
        title: "Odontología con Sedación",
        subheadline:
          "Relájate durante tu procedimiento dental con opciones de sedación seguras y supervisadas para pacientes ansiosos.",
        whatTitle: "¿Qué es la Odontología con Sedación?",
        whatParagraphs: [
          "La odontología con sedación utiliza medicamentos para ayudar a los pacientes ansiosos a relajarse durante los procedimientos. Desde sedantes suaves para ansiedad leve hasta sedación profunda para procedimientos complejos, nuestro equipo adapta el nivel de sedación a cada paciente.",
          "Nuestros anestesiólogos certificados y personal capacitado monitorean a cada paciente durante todo el procedimiento para garantizar seguridad y comodidad en todo momento.",
        ],
        benefits: [
          { title: "Varios Niveles de Sedación", description: "Desde relajación suave hasta sueño profundo, según tus necesidades." },
          { title: "Seguridad Certificada", description: "Anestesiólogos certificados supervisan cada caso de sedación." },
          { title: "Sin Recuerdo del Procedimiento", description: "Muchos pacientes despiertan sorprendidos de que ya terminó." },
          { title: "Atención Sin Ansiedad", description: "Hace posibles procedimientos complejos para pacientes muy ansiosos." },
        ],
        candidates: [
          "Pacientes con ansiedad dental o miedo al dentista",
          "Personas con reflejo nauseoso sensible",
          "Personas que se someten a procedimientos largos o complejos",
          "Pacientes con experiencias dentales traumáticas previas",
        ],
      },
    },
  },
  {
    slug: "specialty-procedures",
    image: specialty,
    related: ["dental-implants", "oral-surgery", "restorative-dentistry"],
    i18n: {
      en: {
        title: "Specialty Procedures",
        subheadline:
          "Advanced dental procedures performed by specialists with expertise in complex cases and unique treatment needs.",
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
      },
      es: {
        title: "Procedimientos Especializados",
        subheadline:
          "Procedimientos dentales avanzados realizados por especialistas con experiencia en casos complejos y necesidades únicas.",
        whatTitle: "¿Qué son los Procedimientos Especializados?",
        whatParagraphs: [
          "Los procedimientos especializados cubren tratamientos dentales avanzados o complejos que van más allá del trabajo restaurador y cosmético rutinario. Esto puede incluir tratamientos para pacientes con necesidades especiales, rehabilitaciones bucales completas, remoción de lesiones precancerosas y otras intervenciones especializadas.",
          "Nuestro equipo de especialistas certificados tiene la formación y experiencia para manejar incluso los casos más complejos, coordinando atención multidisciplinaria para los mejores resultados.",
        ],
        benefits: [
          { title: "Experiencia Especializada", description: "Especialistas certificados con formación en casos complejos." },
          { title: "Planificación Integral", description: "Planes de tratamiento multifásicos coordinados de principio a fin." },
          { title: "Atención Multidisciplinaria", description: "Coordinación fluida entre varios especialistas." },
          { title: "Instalaciones Avanzadas", description: "Equipos de última generación para procedimientos avanzados." },
        ],
        candidates: [
          "Pacientes con necesidades dentales complejas que requieren varios especialistas",
          "Personas con necesidades especiales de salud que requieren atención adaptada",
          "Pacientes con enfermedad periodontal avanzada",
          "Cualquiera que busque una rehabilitación bucal completa",
        ],
      },
    },
  },
  {
    slug: "wisdom-teeth",
    image: wisdom,
    related: ["oral-surgery", "sedation-dentistry", "bone-grafting"],
    i18n: {
      en: {
        title: "Wisdom Teeth",
        subheadline:
          "Safe, comfortable wisdom tooth extraction by experienced oral surgeons in our state-of-the-art surgical facility.",
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
      },
      es: {
        title: "Muelas del Juicio",
        subheadline:
          "Extracción segura y cómoda de muelas del juicio por cirujanos orales con experiencia en nuestras instalaciones de última generación.",
        whatTitle: "¿Qué es la Extracción de Muelas del Juicio?",
        whatParagraphs: [
          "Las muelas del juicio, o terceros molares, suelen aparecer al final de la adolescencia o a principios de los veinte. Cuando quedan impactadas (no logran salir por completo), crecen torcidas o causan apiñamiento, se recomienda su extracción.",
          "Nuestros cirujanos orales realizan extracciones con técnicas avanzadas y opciones de sedación para garantizar una experiencia cómoda con mínimo tiempo de recuperación.",
        ],
        benefits: [
          { title: "Cirujanos con Experiencia", description: "Amplia experiencia en extracciones complejas e impactadas." },
          { title: "Imágenes Digitales", description: "Evaluación precisa del desarrollo y posición de las raíces." },
          { title: "Sedación Cómoda", description: "Múltiples opciones de sedación para un procedimiento sin estrés." },
          { title: "Recuperación Sin Contratiempos", description: "Cuidado posoperatorio detallado y seguimiento para una sanación rápida." },
        ],
        candidates: [
          "Adolescentes o adultos jóvenes a quienes les están saliendo las muelas del juicio",
          "Pacientes con muelas del juicio impactadas o parcialmente erupcionadas",
          "Personas con dolor, inflamación o infección relacionados con las muelas del juicio",
          "Cualquiera a quien su dentista le haya recomendado la extracción",
        ],
      },
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
