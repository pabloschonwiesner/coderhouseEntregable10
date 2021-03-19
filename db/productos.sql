USE [RCSistema]
GO
/****** Object:  Table [dbo].[OrdenProduccionRollos]    Script Date: 22/02/2021 12:33:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrdenProduccionRollos](
	[nroOt] [int] NULL,
	[cantidadRollos] [int] NULL,
	[cantidadEtiquetasRollo] [int] NULL,
	[metrosRollo] [float] NULL,
	[fechaEntrega] [datetime] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PapelDiametros]    Script Date: 22/02/2021 12:33:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PapelDiametros](
	[codigoMaterial] [int] NULL,
	[medidaBuje] [varchar](50) NULL,
	[diametro] [float] NULL,
	[metros] [float] NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 9.5, 11)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 15, 86)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 20, 182)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 25, 309)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 28, 390)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 28.7, 420)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (1, N'3´´', 30, 454)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 19, 180)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 20, 195)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 21, 235)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 25, 324)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 28, 418)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 29, 452)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 30, 480)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 31, 524)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 32, 556)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 33, 600.4)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 34, 646.5)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 35, 686.5)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 36, 722.5)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 37, 759)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 38, 790)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 39, 810)
INSERT [dbo].[PapelDiametros] ([codigoMaterial], [medidaBuje], [diametro], [metros]) VALUES (3, N'3´´', 40, 909)
