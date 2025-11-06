import { MetricCard } from "@/components/MetricCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto space-y-6">
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Análisis Ejecutivo 1980-2023
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Eficacia de las Campañas y Disparidades en la Cobertura de Vacunación
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Evaluación de 43 años del Programa de Vacunación (PAI) en Antioquia
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Metrics */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <MetricCard
            title="Total de Dosis"
            value="25M"
            description="Dosis acumuladas 1980-2023"
            variant="accent"
          />
          <MetricCard
            title="Período Analizado"
            value="43 años"
            description="1980 - 2023"
            variant="default"
          />
          <MetricCard
            title="Pico Histórico"
            value="1.0M"
            description="Dosis anuales en 2017"
            variant="success"
          />
        </div>
      </section>

      {/* Evolución Histórica */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeader
            icon="📈"
            title="Evolución Histórica de la Cobertura"
            subtitle="Hito 1: Expansión Masiva del Programa"
          />
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Período</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tendencia</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Enfoque Poblacional</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Composición de Vacunas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">1980 - 1987</td>
                    <td className="px-6 py-4 text-sm">
                      <Badge variant="outline">Programa Básico</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Enfocado casi exclusivamente en "menores de 1 año". Otros grupos no recibían dosis significativas.
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Limitada (2-3 vacunas básicas)</td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">2010 - 2023</td>
                    <td className="px-6 py-4 text-sm">
                      <Badge className="bg-accent text-accent-foreground">Máxima Expansión</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Inclusión masiva de los grupos "un año" y "6 a 23 meses" en el esquema.
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Diversificada (8-10 vacunas): Neumococo, Rotavirus, Hepatitis A, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔑</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Conclusión Clave</h3>
                <p className="text-muted-foreground">
                  El esquema de vacunación es actualmente robusto y resiliente, manteniendo una composición de vacunas 
                  estable y alta en los grupos "menores de 1 año" y "un año" incluso en el período 2020-2023.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tendencias Temporales */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <SectionHeader
              icon="📉"
              title="Tendencias Temporales de Dosis"
              subtitle="Hito 2: El Ciclo de Crecimiento y el Retroceso Reciente"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Fase de Crecimiento Sostenido
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">1980-2017</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    La suma anual de dosis creció de <strong className="text-foreground">≈0.15M</strong> a un 
                    máximo histórico de <strong className="text-accent">≈1.0M</strong> de dosis.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Esta mejora fue impulsada por la introducción progresiva de nuevas vacunas en el PAI.
                  </p>
                </div>
              </Card>

              <Card className="p-6 space-y-4 border-destructive/30 bg-destructive/5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-xl">📉</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Fase de Retroceso
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">2018-2020</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Caída sostenida del pico de 2017 hasta <strong className="text-destructive">≈0.8M</strong> hacia 2020.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Factores del Descenso (Post-2018)
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <span className="text-xl">🏢</span>
                  <div>
                    <p className="font-medium text-foreground">Barreras Logísticas</p>
                    <p className="text-sm text-muted-foreground">y Administrativas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <span className="text-xl">👥</span>
                  <div>
                    <p className="font-medium text-foreground">Factores Sociales</p>
                    <p className="text-sm text-muted-foreground">Desinformación y temores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <span className="text-xl">🦠</span>
                  <div>
                    <p className="font-medium text-foreground">Impacto Pandemia</p>
                    <p className="text-sm text-muted-foreground">Aceleró la caída en 2020</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Disparidades Geográficas */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeader
            icon="🗺️"
            title="Disparidades Geográficas en la Cobertura"
            subtitle="Hito 3: Concentración vs. Brecha en los Municipios"
          />

          <Card className="p-6 bg-muted/50">
            <p className="text-muted-foreground">
              El número de dosis está altamente concentrado, reflejando directamente la densidad poblacional 
              y la infraestructura de salud.
            </p>
          </Card>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tipo de Municipio</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Distribución de Dosis</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Ejemplos</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Brecha y Desafío</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      Grandes Núcleos Urbanos
                      <div className="text-xs text-muted-foreground mt-1">(Valle de Aburrá)</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <Badge className="bg-accent text-accent-foreground">Alta Concentración</Badge>
                        <p className="text-sm text-muted-foreground">
                          Medellín: <strong className="text-foreground">≈9M</strong> dosis 
                          (<strong className="text-accent">≈36%</strong> del total)
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Medellín, Bello, Itagüí
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      El éxito se concentra en el área metropolitana
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      Municipios Periféricos
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <Badge variant="destructive">Baja Cobertura</Badge>
                        <p className="text-sm text-muted-foreground">
                          Menos de <strong className="text-foreground">0.5M</strong> dosis acumuladas
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      Puerto Berrío, Yarumal, El Bagre, Necoclí
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <strong className="text-destructive">Desafío Principal:</strong>
                      <div className="text-muted-foreground mt-1">
                        Reducir brecha en regiones distantes (Urabá y Bajo Cauca)
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Conclusiones */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <SectionHeader
              icon="✅"
              title="Conclusiones Ejecutivas"
              className="text-primary-foreground"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-primary-foreground/90">
                    El PAI logró una <strong className="text-primary-foreground">expansión histórica</strong> de 1980 a 2017
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-primary-foreground/90">
                    La <strong className="text-primary-foreground">resiliencia</strong> de la campaña para población prioritaria 
                    ("menores de 1 año") es alta
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠</span>
                  <p className="text-primary-foreground/90">
                    La <strong className="text-primary-foreground">caída post-2017</strong> indica que la suma total 
                    no se ha recuperado a niveles máximos
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <p className="text-primary-foreground/90">
                    La <strong className="text-primary-foreground">disparidad geográfica</strong> es la principal brecha: 
                    el éxito de Medellín debe replicarse en la ruralidad
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Análisis Ejecutivo: Campaña de Vacunación de Antioquia (1980-2023)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
